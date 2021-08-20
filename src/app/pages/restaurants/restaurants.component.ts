import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '@core/data/restaurant';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'lov-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurantsService
      .listRestaurants()
      .subscribe((response) => (this.restaurants = response));
  }
}
