import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants.service';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'lov-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private restaurantService: RestaurantsService) {}

  ngOnInit(): void {
    this.listRestaurantMenu();
  }

  listRestaurantMenu() {
    this.restaurantService.listRestaurantMenu().subscribe((response) => {
      const menuItems = response;
      this.menuItems = menuItems;
    });
  }
}
