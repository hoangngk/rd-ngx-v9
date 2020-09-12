import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemFormComponent } from './components/order-item-form/order-item-form.component';
import { HighlightDirective } from './highlight.directive';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemFormComponent,
    HighlightDirective,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [
    OrderItemFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
