import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants.service';
import { ReviewItem } from './review-item/review-item.data';

@Component({
  selector: 'lov-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: ReviewItem[] = [];

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantService
      .listRestaurantReviews(this.route.parent?.snapshot.params['id'])
      .subscribe((reviews) => (this.reviews = reviews));
  }
}
