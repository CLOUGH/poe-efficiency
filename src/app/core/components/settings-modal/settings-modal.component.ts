import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppState } from '../../store/app/app.state';
import { Store } from '@ngrx/store';
import { GetCharacters } from '../../store/character/character.actions';
import { GoogleAnalyticsServiceService } from '../../services/google-analytics-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.sass']
})
export class SettingsModalComponent implements OnInit {
  poesessid: string;

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<IAppState>,
    private googleAnalyticsService: GoogleAnalyticsServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.poesessid = localStorage.getItem('POESESSID');
  }

  saveChanges() {
    this.googleAnalyticsService.eventEmitter('Configuration Event', 'updated settings', 'savedSettings');
    localStorage.setItem('POESESSID', this.poesessid);
    this.store.dispatch(new GetCharacters());
    this.activeModal.close();
  }

}
