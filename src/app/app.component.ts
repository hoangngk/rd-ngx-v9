import { HighlightDirective } from './highlight.directive';
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import { OrderItemFormComponent } from './components/order-item-form/order-item-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'export-order';

  @ViewChild('orderItemForm', { read: ElementRef }) public orderItemFormContainerRef: ViewContainerRef;
  @ViewChild('highlight', { read: HighlightDirective }) public highlight: any;

  private componentIndex = 0;

  private orderItemFormAdded = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public ngAfterViewInit(): void {
    console.log('orderItemForm ', this.orderItemFormContainerRef);
    console.log('highlight ', this.highlight);
  }

  public clickOnContainer(): void {
    console.log('clicked on container of app component');
  }
}
