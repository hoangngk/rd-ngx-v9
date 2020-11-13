import { Component, OnInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements AfterViewChecked, DoCheck {
  public name = 'first hoang';

  constructor() {
    setTimeout(() => this.name = 'updated hoang', 7000);
  }
  ngDoCheck(): void {
    console.log('Child B DoCheck invoked');
  }

  ngAfterViewChecked(): void {
    console.log('Child B AfterViewChecked invoked');
  }

}
