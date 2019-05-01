import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.sass']
})
export class SettingsModalComponent implements OnInit {
  poesessid: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.poesessid = localStorage.getItem('POESESSID');
  }

  saveChanges() {
    localStorage.setItem('POESESSID', this.poesessid);
    this.activeModal.close();
  }

}
