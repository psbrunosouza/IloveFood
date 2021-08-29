import { MenuItem } from '../menu/menu-item/menu-item';

export class Cart {
  constructor(public menuItem: MenuItem, public quantity = 1) {}

  /**
   * return the total price of the item times item quantity
   * @returns
   */
  totalByQuantityItem(): number {
    return this.menuItem.price * this.quantity;
  }
}
