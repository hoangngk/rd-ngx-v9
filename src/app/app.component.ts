import { Component, OnInit, AfterViewChecked, AfterViewInit, DoCheck } from '@angular/core';
import { ɵmarkDirty as markDirty} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked, DoCheck {
  public title = 'ng-rd-v9';

  public onClick(event: Event): void {
    console.log('event ', event);
  }

  public ngDoCheck(): void {
    console.log('App DoCheck');
  }

  public ngAfterViewChecked(): void {
    console.log('App AfterViewChecked');
  }
}
