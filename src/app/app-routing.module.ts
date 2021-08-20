import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { MenuComponent } from './pages/restaurants/restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './pages/restaurants/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './pages/restaurants/restaurant-detail/reviews/reviews.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [HomeModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
