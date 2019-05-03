import { Component, OnInit } from '@angular/core';
import { SettingsModalComponent } from '../components/settings-modal/settings-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppState } from '../store/app/app.state';
import { Store, select } from '@ngrx/store';
import { GetCharacters, SetSelectedCharacterIndex } from '../store/character/character.actions';
import { selectCharacterList, selectSelectedCharacterIndex } from '../store/character/character.selectors';

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
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetCharacters());
  }

  openSettings() {
    const modalRef = this.modalService.open(SettingsModalComponent);
  }

  onChangeSelectedCharacter(index: number){
    this.store.dispatch(new SetSelectedCharacterIndex(index));
  }
}
