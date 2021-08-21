import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants.service';
import { MenuItem } from './menu-item/menu-item.data';

@Component({
  selector: 'lov-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listRestaurantMenu(this.route.parent?.snapshot.params['id']);
  }

  listRestaurantMenu(id: string) {
    this.restaurantService.listRestaurantMenu(id).subscribe((response) => {
      const menuItems = response;
      this.menuItems = menuItems;
    });
  }

  addMenuItem(menuItem: MenuItem): void {
    console.log(menuItem);
  }
}
