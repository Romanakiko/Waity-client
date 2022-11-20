import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import {OrderRoutingModule} from "./order-routing.module";
import { MenuCardComponent } from './menu/menu-card/menu-card.component';



@NgModule({
  declarations: [
    MenuComponent,
    BasketComponent,
    MenuCardComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
