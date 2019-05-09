import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/app/app.state';
import { selectSelectedCharacter } from 'src/app/core/store/character/character.selectors';
import { Router } from '@angular/router';
import { GoogleAnalyticsServiceService } from 'src/app/core/services/google-analytics-service.service';
import { ICharacter } from 'src/app/core/models/icharacter';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  public itemData: any;
  similarTradedItems: any[];
  selectedCharacter: ICharacter;

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
      select(selectSelectedCharacter)
    ).subscribe(character => {
      this.selectedCharacter = character;
    });
  }
  getItemCurrentValue() {
    this.googleAnalyticsService.eventEmitter('Item Event', 'Get Item Current Value');

    this.apiService.getSimilarItem(this.itemData, this.selectedCharacter.league).pipe(
      switchMap(data => of(data))
    ).subscribe((similarTradedItems: any) => {
      // console.log(similarTradedItems);
      this.similarTradedItems = similarTradedItems;
    })
  }
}
