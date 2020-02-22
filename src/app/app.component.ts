import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-rd-v9';

  public onClick(event: Event): void {
    console.log('event ', event);
  }
}
