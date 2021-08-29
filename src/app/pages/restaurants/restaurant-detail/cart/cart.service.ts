import { MenuItem } from '../menu/menu-item/menu-item';
import { Cart } from './cart.data';

export class CartService {
  items: Cart[] = [];

  /**
   * clear the list of items
   */
  clear(): void {
    this.items = [];
  }

  /**
   * returns the value amount of the total items
   */
  total(): number {
    return this.items
      .map((item) => item.totalByQuantityItem())
      .reduce((prev, value) => prev + value, 0);
  }

  /**
   * add a new item into the cart
   * @param item
   */
  add(item: MenuItem): void {
    const foundItem = this.items.find((foundItem) => {
      return foundItem.menuItem.id === item.id;
    });

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      this.items.push(new Cart(item));
    }
  }

  /**
   * remove an item from the cart
   * @param item
   */
  remove(item: Cart): void {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
