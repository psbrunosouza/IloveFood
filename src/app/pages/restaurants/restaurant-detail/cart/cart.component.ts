import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menu-item/menu-item';
import { Cart } from './cart.data';
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

  /**
   * method called to clear the cart list
   */
  clear(): void {
    this.cartService.clear();
  }

  /**
   * method called to remove the item from the cart
   * @param item
   */
  remove(item: Cart): void {
    this.cartService.remove(item);
  }

  /**
   * method called to add a new item into the cart
   * @param item
   */
  add(item: MenuItem): void {
    this.cartService.add(item);
  }
}
