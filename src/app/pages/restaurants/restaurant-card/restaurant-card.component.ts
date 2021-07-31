import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lov-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: any;
  @Input() image: string = "https://static.wixstatic.com/media/f6309b_484b1efdc49b4fa5a895818704cd8a41~mv2.jpg/v1/fill/w_640,h_378,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/f6309b_484b1efdc49b4fa5a895818704cd8a41~mv2.webp";
  @Input() title: string = "Restaurante mucho bueno";
  @Input() description: string = "La bestia";
  @Input() rate: number = 5.0;

  constructor() { }

  ngOnInit(): void {
  }

}
