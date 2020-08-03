import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { OrderItemFormComponent } from './components/order-item-form/order-item-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'export-order';

  @ViewChild('orderItemForm', { read: ViewContainerRef }) public orderItemFormContainerRef: ViewContainerRef;
  private componentIndex = 0;

  private orderItemFormAdded = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public addItem(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(OrderItemFormComponent);
    const orderItemFormRef = this.orderItemFormContainerRef.createComponent(componentFactory);

    orderItemFormRef.instance.index = this.componentIndex;
    orderItemFormRef.instance.parentRef = this;

    this.orderItemFormAdded.push(orderItemFormRef);
    this.componentIndex++;

  }

  public removeItem(index: number): void {
    const selectedComponent = this.orderItemFormAdded.find(o => o.instance.index === index);
    const indexOf = this.orderItemFormContainerRef.indexOf(selectedComponent.hostView);
    console.log('index of ', indexOf);
  }
}
