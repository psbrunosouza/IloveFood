import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'com-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent implements OnInit {
  @Input() color: string;
  @Input() size: number;
  @Input() borderStyle: string;

  constructor() {}

  ngOnInit(): void {}
}
