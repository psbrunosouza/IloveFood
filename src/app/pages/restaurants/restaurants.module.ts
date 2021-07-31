import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { ComponentsModule } from '@components/@components.module';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RestaurantsComponent, RestaurantCardComponent],
  imports: [CommonModule, ComponentsModule, MatIconModule],
})
export class RestaurantsModule {}
