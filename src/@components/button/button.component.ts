import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tem-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text = "";

  constructor() { }

  ngOnInit(): void {
  }

}
