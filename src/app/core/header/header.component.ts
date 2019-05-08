import { Component, OnInit } from '@angular/core';
import { SettingsModalComponent } from '../components/settings-modal/settings-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppState } from '../store/app/app.state';
import { Store, select } from '@ngrx/store';
import { SetSelectedCharacterIndex } from '../store/character/character.actions';
import { selectCharacterList, selectSelectedCharacterIndex } from '../store/character/character.selectors';
import { GoogleAnalyticsServiceService } from '../services/google-analytics-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  characters$ = this.store.pipe(select(selectCharacterList));
  selectedCharacterIndex$ = this.store.pipe(select(selectSelectedCharacterIndex));

  constructor(
    private modalService: NgbModal,
    private store: Store<IAppState>,
    private googleAnalyticsService: GoogleAnalyticsServiceService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  openSettings() {
    this.googleAnalyticsService.eventEmitter('Configuration Event', 'opened settings modal', 'openSettings', null);
    const modalRef = this.modalService.open(SettingsModalComponent);
  }

  onChangeSelectedCharacter(index: number) {
    this.googleAnalyticsService.eventEmitter(
      'Configuration Event',
      'changed active character',
      'onChangeCharacter',
      this.characters$[index].name
    )
    this.store.dispatch(new SetSelectedCharacterIndex(index));
  }
}
