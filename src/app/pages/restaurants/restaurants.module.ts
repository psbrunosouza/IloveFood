import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { ComponentsModule } from '@components/@components.module';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { MatIconModule } from '@angular/material/icon';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantCardComponent,
    RestaurantDetailComponent,
  ],
  imports: [CommonModule, ComponentsModule, MatIconModule],
})
export class RestaurantsModule {}
