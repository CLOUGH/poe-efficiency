import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbTabsetModule, NgbPopoverModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ItemComponent } from './components/item/item.component';
import { DisplayPropertyNamePipe } from './pipes/display-property-name.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
import { MomentModule } from 'ngx-moment';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    HomeComponent,
    InventoryComponent,
    ItemComponent,
    DisplayPropertyNamePipe,
    CurrencyPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbTabsetModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    MomentModule,
    AngularFontAwesomeModule
  ]
})
export class HomeModule { }
