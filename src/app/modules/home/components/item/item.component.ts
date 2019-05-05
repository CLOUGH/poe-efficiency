import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/app/app.state';
import { selectSelectedCharacter } from 'src/app/core/store/character/character.selectors';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  public itemData: any;
  similarTradedItems: any[];
  characteLeauge: string;

  @Input() set item(value: any) {
    this.itemData = value;
  }

  constructor(private apiService: ApiService, private store$: Store<IAppState>) { }

  ngOnInit() {
    this.store$.pipe(
      select(selectSelectedCharacter),
      switchMap(data => of(data))
    ).subscribe(character => {
      this.characteLeauge = character.league;
    });
  }
  getItemCurrentValue() {
    this.apiService.getSimilarItem(this.itemData, this.characteLeauge).pipe(
      switchMap(data => of(data))
    ).subscribe((similarTradedItems: any) => {
      // console.log(similarTradedItems);
      this.similarTradedItems = similarTradedItems;
    })
  }
}
