import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {NgbTabsetModule, NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ItemComponent } from './components/item/item.component';
import { DisplayPropertyNamePipe } from './pipes/display-property-name.pipe';


@NgModule({
  declarations: [HomeComponent, InventoryComponent, ItemComponent, DisplayPropertyNamePipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbTabsetModule,
    NgbPopoverModule
  ]
})
export class HomeModule { }
