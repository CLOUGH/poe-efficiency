import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/app/app.state';
import { selectSelectedCharacter } from 'src/app/core/store/character/character.selectors';
import { Router } from '@angular/router';
import { GoogleAnalyticsServiceService } from 'src/app/core/services/google-analytics-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  public itemData: any;
  similarTradedItems: any[];
  characterLeague: string;

  @Input() set item(value: any) {
    this.itemData = value;
  }

  constructor(
    private apiService: ApiService,
    private store$: Store<IAppState>,
    private googleAnalyticsService: GoogleAnalyticsServiceService
  ) { }

  ngOnInit() {
    this.store$.pipe(
      select(selectSelectedCharacter),
      switchMap(data => of(data))
    ).subscribe(character => {
      this.characterLeague = character.league;
    });
  }
  getItemCurrentValue() {
    this.googleAnalyticsService.eventEmitter('Item Event', 'Get Item Current Value');

    this.apiService.getSimilarItem(this.itemData, this.characterLeague).pipe(
      switchMap(data => of(data))
    ).subscribe((similarTradedItems: any) => {
      // console.log(similarTradedItems);
      this.similarTradedItems = similarTradedItems;
    })
  }
}
