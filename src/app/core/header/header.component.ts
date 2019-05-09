import { Component, OnInit } from '@angular/core';
import { SettingsModalComponent } from '../components/settings-modal/settings-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppState } from '../store/app/app.state';
import { Store, select } from '@ngrx/store';
import { SetSelectedCharacterIndex } from '../store/character/character.actions';
import { selectCharacterList, selectSelectedCharacterIndex, selectSelectedCharacter } from '../store/character/character.selectors';
import { GoogleAnalyticsServiceService } from '../services/google-analytics-service.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  characters$ = this.store.pipe(select(selectCharacterList));
  selectedCharacter$ = this.store.pipe(select(selectSelectedCharacter));

  constructor(
    private modalService: NgbModal,
    private store: Store<IAppState>,
    private googleAnalyticsService: GoogleAnalyticsServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('POESESSID')) {
      this.openSettings();
    }
  }

  openSettings() {
    this.googleAnalyticsService.eventEmitter('Configuration Event', 'opened settings modal', 'openSettings', null);
    const modalRef = this.modalService.open(SettingsModalComponent);
  }

  changeSelectedCharacter(index: number) {
    this.googleAnalyticsService.eventEmitter('Configuration Event', 'changed active character');
    this.store.dispatch(new SetSelectedCharacterIndex(index));
  }
}
