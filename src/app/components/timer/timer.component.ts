import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  public delay = 0;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => this.delay = 1, 3000);
  }

  public get time(): number {
    // call every change detection invoked
    return Date.now();
  }

}
