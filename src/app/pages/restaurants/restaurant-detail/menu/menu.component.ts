import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants.service';
import { CartService } from '../cart/cart.service';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'lov-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(
    private restaurantService: RestaurantsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listRestaurantMenu(this.route.parent?.snapshot.params['id']);
  }

  /**
   * method to retrieve the list menuItems list by restaurant id
   * through the cart service
   * @param id
   */
  listRestaurantMenu(id: string) {
    this.restaurantService.listRestaurantMenu(id).subscribe((response) => {
      this.menuItems = response;
    });
  }

  /**
   * Method to add a new item through cart service
   * @param menuItem
   */
  addMenuItem(menuItem: MenuItem): void {
    this.cartService.add(menuItem);
  }
}
