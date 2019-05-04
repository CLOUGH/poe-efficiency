import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  public itemData: any;

  @Input() set item(value: any){
    this.itemData = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
