import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RestoMapComponent } from './resto-map/resto-map.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import {MainRoutingModule} from "./main-routing.module";



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    RestoMapComponent,
    BlogComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
