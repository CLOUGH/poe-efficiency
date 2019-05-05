import { Component, OnInit } from '@angular/core';
import { PathOfExileApiService } from 'src/app/core/services/path-of-exile-api.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/app/app.state';
import { selectSelectedCharacter } from 'src/app/core/store/character/character.selectors';
import { ICharacter } from 'src/app/core/models/icharacter';
import { filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

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


  constructor(
    private poeService: PathOfExileApiService,
    private toastr: ToastrService,
    private store: Store<IAppState>,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.store.select(selectSelectedCharacter)
      .pipe(
        filter(character => !!character),
        switchMap(character => of(character))
      )
      .subscribe(character => {
        // console.log(character);

        this.setItemData("cloughax", character.name);
      });
  }

  private setItemData(accountName, character) {
    this.poeService.getItems(accountName, character).subscribe((data: any) => {
      // console.log(data);
      this.items = data.items;
    });
  }

  private getItemValue(item) {
    // this.apiService.getItemValue(item).subscribe(data=>{
    //   // console.log(data)
    // })
  }

}
