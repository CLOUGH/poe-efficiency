import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {
  flasks: any[] = [];
  inventoryItems: any[] = [];
  offHand: any;
  weapon: any;
  helm: any;
  bodyArmour: any;
  belt: any;
  leftRing: any;
  rightRing: any;
  secondWeapon: any;
  secondOffHand: any;
  gloves: any;
  boots: any;
  amulet: any;

  @Input() set items(items: any[]) {
    this.offHand = null;
    this.weapon = null;
    this.helm = null;
    this.bodyArmour = null;
    this.belt = null;
    this.leftRing = null;
    this.rightRing = null;
    this.secondWeapon = null;
    this.secondOffHand = null;
    this.gloves = null;
    this.boots = null;
    this.amulet = null;
    this.flasks = [];
    this.inventoryItems = [];
    if (items) {
      items.forEach(item => {
        if (item.inventoryId === 'Flask') {
          this.flasks.push(item);
        }

        if (item.inventoryId === 'Offhand') {
          this.offHand = item;
        }
        if (item.inventoryId === 'Weapon') {
          this.weapon = item;
        }

        if (item.inventoryId === 'Helm') {
          this.helm = item;
        }

        if (item.inventoryId === 'BodyArmour') {
          this.bodyArmour = item;
        }
        if (item.inventoryId === 'Belt') {
          this.belt = item;
        }
        if (item.inventoryId === 'Ring') {
          this.leftRing = item;
        }
        if (item.inventoryId === 'Ring2') {
          this.rightRing = item;
        }
        if (item.inventoryId === 'Weapon2') {
          this.secondWeapon = item;
        }
        if (item.inventoryId === 'Offhand2') {
          this.secondOffHand = item;
        }
        if (item.inventoryId === 'Gloves') {
          this.gloves = item;
        }
        if (item.inventoryId === 'Boots') {
          this.boots = item;
        }
        if (item.inventoryId === 'Amulet') {
          this.amulet = item;
        }
        if (item.inventoryId === 'MainInventory') {
          this.inventoryItems.push(item);
        }
      });

      this.flasks.sort((a, b) => a.x - b.x)
    }
  }


  constructor() { }

  ngOnInit() {
  }
}
