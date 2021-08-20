import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '@core/data/restaurant';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'lov-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantsService
      .findRestaurant(this.route.snapshot.params['id'])
      .subscribe((restaurant) => {
        this.restaurant = restaurant;
        console.log(this.restaurant);
      });
  }
}
