import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() color: string = 'blue';

  get bgColor() {
    return `bg-${this.color}-400`;
  }

  constructor() {}
  ngOnInit(): void {}
}
