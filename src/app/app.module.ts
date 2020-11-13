import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { ChildComponent } from './components/child/child.component';
import { ParentBComponent } from './components/parent-b/parent-b.component';
import { ParentComponent } from './components/parent/parent.component';
import { LibCompComponentModule } from './modules/lib.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ParentBComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LibCompComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
