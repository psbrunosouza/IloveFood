import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '@core/data/restaurant';

@Component({
  selector: 'lov-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor(private route: Router) { }

  seeRestaurant(id: string){
    this.route.navigate(['/restaurants/', id])
  }

  ngOnInit(): void {
  }

}
