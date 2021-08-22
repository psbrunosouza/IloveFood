import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tem-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() color: string;
  @Input() htmlType: string;
  @Input() size: number;
  @Input() icon: string;

  constructor() {}

  ngOnInit(): void {}
}
