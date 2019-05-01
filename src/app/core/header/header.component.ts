import { Component, OnInit } from '@angular/core';
import { SettingsModalComponent } from '../components/settings-modal/settings-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openSettings() {
    const modalRef = this.modalService.open(SettingsModalComponent);
  }
}
