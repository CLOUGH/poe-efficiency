import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppState } from '../../store/app/app.state';
import { Store } from '@ngrx/store';
import { GetCharacters } from '../../store/character/character.actions';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.sass']
})
export class SettingsModalComponent implements OnInit {
  poesessid: string;

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.poesessid = localStorage.getItem('POESESSID');
  }

  saveChanges() {
    localStorage.setItem('POESESSID', this.poesessid);
    this.store.dispatch(new GetCharacters());
    this.activeModal.close();
  }

}
