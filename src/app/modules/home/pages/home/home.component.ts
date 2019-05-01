import { Component, OnInit } from '@angular/core';
import { PathOfExileApiService } from 'src/app/core/services/path-of-exile-api.service';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private poeService: PathOfExileApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.poeService.getCharacters().subscribe((data: any[]) => {
      this.characters = data;
      this.activeCharacter = data.find(character => character.lastActive === true).name;

      this.setItemData('cloughax', this.activeCharacter);

    }, (error: any) => {
      setTimeout(() => {
        this.toastr.error('A error has occured while trying to get character data.');
      });
      console.error(error);
      this.error = error;
    });
  }

  private setItemData(accountName, character) {
    this.poeService.getItems(accountName, character).subscribe((data: any) => {
      console.log(data);
      this.items = data.items;
    });
  }

}
