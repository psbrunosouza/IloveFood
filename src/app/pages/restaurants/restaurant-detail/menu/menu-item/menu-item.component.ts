import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'com-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem = new MenuItem();
  @Output() add: EventEmitter<MenuItem> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitAddEvent(): void {
    this.add.emit(this.menuItem);
  }
}
