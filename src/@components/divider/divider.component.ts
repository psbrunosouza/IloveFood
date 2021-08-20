import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'com-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {

  @Input() color: string;
  @Input() size: number;

  constructor() { }

  ngOnInit(): void {
  }

}
