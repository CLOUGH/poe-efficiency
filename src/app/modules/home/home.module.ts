import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [HomeComponent, InventoryComponent, ItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbTabsetModule
  ]
})
export class HomeModule { }
