import { Component, OnInit } from '@angular/core';
import { PathOfExileApiService } from 'src/app/core/services/path-of-exile-api.service';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/app/app.state';
import { selectSelectedCharacter } from 'src/app/core/store/character/character.selectors';
import { ICharacter } from 'src/app/core/models/icharacter';
import { filter, switchMap, startWith, delay, map } from 'rxjs/operators';
import { of, interval, from } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { GoogleAnalyticsServiceService } from 'src/app/core/services/google-analytics-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [PathOfExileApiService, ApiService]
})
export class HomeComponent implements OnInit {
  characters: any[];
  items: any[];
  activeCharacter: string;
  error: any;
  updating = false;


  constructor(
    private poeService: PathOfExileApiService,
    private toastr: ToastrService,
    private store: Store<IAppState>,
    private apiService: ApiService,
    private googleAnalyticsService: GoogleAnalyticsServiceService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  private setItemData(accountName, character) {
  }

  private refresh() {
    interval(30000).pipe(startWith(0)).subscribe(() => {
      this.updating = true;
      this.store.pipe(
        select(selectSelectedCharacter),
        filter(character => character !== null),
        switchMap(character => this.poeService.getItems('cloughax', character.name))
      ).subscribe((data: any) => {
        this.items = data.items;
        setTimeout(() => {
          this.updating = false;
        }, 1000);
      });
    });
  }

  public refreshManually() {
    this.googleAnalyticsService.eventEmitter('Character Items', 'Manually Triggered Refresh');
    this.refresh();
  }

}
