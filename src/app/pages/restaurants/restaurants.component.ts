import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Restaurant } from '@core/data/restaurant';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'lov-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit(): void {
    this.listRestaurants();
  }

  ngOnDestroy(): void {
    this.restaurantsService.restaurants = [];
  }

  listRestaurants(): void {
    this.restaurantsService.listRestaurants().subscribe((response) => {
      this.restaurants = response;
      this.restaurantsService.restaurants = this.restaurants;
    });
  }
}
