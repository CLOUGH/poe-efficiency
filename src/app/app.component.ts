import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';
import { IAppState } from './core/store/app/app.state';
import { Store } from '@ngrx/store';
import { GetStaticData } from './core/store/static/static-data.actions';
import { GetCharacters } from './core/store/character/character.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}
  
  ngOnInit(): void {
    this.store.dispatch(new GetStaticData());
    this.store.dispatch(new GetCharacters());
  }
}
