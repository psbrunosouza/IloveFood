import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'lov-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  /**
   * return the list of items stored into the cart
   * @returns any[]
   */
  items(): any[] {
    return this.cartService.items;
  }

  /**
   * returns the value amount of the total items
   * @returns number
   */
  total(): number {
    return this.cartService.total();
  }
}
