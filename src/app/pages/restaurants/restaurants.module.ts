import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { ComponentsModule } from '@components/@components.module';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { MatIconModule } from '@angular/material/icon';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { CartComponent } from './restaurant-detail/cart/cart.component';
import { MenuItemComponent } from './restaurant-detail/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantCardComponent,
    RestaurantDetailComponent,
    MenuComponent,
    CartComponent,
    MenuItemComponent,
    ReviewsComponent,
  ],
  imports: [CommonModule, ComponentsModule, MatIconModule, RouterModule],
})
export class RestaurantsModule {}
