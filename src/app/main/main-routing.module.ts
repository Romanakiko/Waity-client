import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {RestoMapComponent} from "./resto-map/resto-map.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'resto-map',
        component: RestoMapComponent
      },
      {
        path: '**',
        redirectTo: 'order'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
