import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {BasketComponent} from "./basket/basket.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'menu',
    pathMatch: "full"
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: '**',
    redirectTo: 'menu'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
