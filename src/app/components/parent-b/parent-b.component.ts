import { Component, OnInit, AfterViewChecked, AfterViewInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent-b',
  templateUrl: './parent-b.component.html',
  styleUrls: ['./parent-b.component.scss']
})
export class ParentBComponent implements AfterViewChecked, DoCheck {

  constructor() { }

  ngDoCheck(): void {
    console.log('Parent B DoCheck invoked');
  }

  ngAfterViewChecked(): void {
    console.log('Parent B AfterViewChecked invoked');
  }

}
