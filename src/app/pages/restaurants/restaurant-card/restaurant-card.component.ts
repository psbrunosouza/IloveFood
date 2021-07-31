import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '@core/data/restaurant';

@Component({
  selector: 'lov-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit(): void {
  }

}
