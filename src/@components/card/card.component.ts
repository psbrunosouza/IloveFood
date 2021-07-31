import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tem-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  image: string = "https://static.wixstatic.com/media/f6309b_484b1efdc49b4fa5a895818704cd8a41~mv2.jpg/v1/fill/w_640,h_378,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/f6309b_484b1efdc49b4fa5a895818704cd8a41~mv2.webp";
  title: string = "Restaurante mucho bueno";
  description: string = "La bestia"

  constructor() { }

  ngOnInit(): void {
  }

}
