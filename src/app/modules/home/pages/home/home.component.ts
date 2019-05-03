import { Component, OnInit } from '@angular/core';
import { PathOfExileApiService } from 'src/app/core/services/path-of-exile-api.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/app/app.state';
import { selectSelectedCharacter } from 'src/app/core/store/character/character.selectors';
import { ICharacter } from 'src/app/core/models/icharacter';
import { filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [PathOfExileApiService]
})
export class HomeComponent implements OnInit {
  characters: any[];
  items: any[];
  activeCharacter: string;
  error: any;


  constructor(
    private poeService: PathOfExileApiService,
    private toastr: ToastrService,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.store.select(selectSelectedCharacter)
      .pipe(
        filter(character => !!character),
        switchMap(character => of(character))
      )
      .subscribe(character => {
        console.log(character);

        this.setItemData("cloughax", character.name);
      });
    // this.poeService.getCharacters().subscribe((data: any[]) => {
    //   this.characters = data;
    //   this.activeCharacter = data.find(character => character.lastActive === true).name;

    //   this.setItemData('cloughax', this.activeCharacter);

    // }, (error: any) => {
    //   setTimeout(() => {
    //     this.toastr.error('A error has occured while trying to get character data.');
    //   });
    //   console.error(error);
    //   this.error = error;
    // });
  }

  private setItemData(accountName, character) {
    this.poeService.getItems(accountName, character).subscribe((data: any) => {
      console.log(data);
      this.items = data.items;
    });
  }

}
