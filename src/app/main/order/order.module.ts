import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BasketComponent } from './basket/basket.component';
import {OrderRoutingModule} from "./order-routing.module";



@NgModule({
  declarations: [
    MenuComponent,
    BasketComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
