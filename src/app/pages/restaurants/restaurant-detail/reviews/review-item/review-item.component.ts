import { Component, Input, OnInit } from '@angular/core';
import { ReviewItem } from './review-item.data';

@Component({
  selector: 'lov-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss'],
})
export class ReviewItemComponent implements OnInit {
  @Input() review: ReviewItem = new ReviewItem();

  constructor() {}

  ngOnInit(): void {
    console.log(this.review);
  }
}
