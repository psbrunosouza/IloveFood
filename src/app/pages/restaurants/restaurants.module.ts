import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { ComponentsModule } from '@components/@components.module';



@NgModule({
  declarations: [
    RestaurantsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class RestaurantsModule { }
