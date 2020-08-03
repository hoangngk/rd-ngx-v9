import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-item-form',
  templateUrl: './order-item-form.component.html',
  styleUrls: ['./order-item-form.component.scss']
})
export class OrderItemFormComponent implements OnInit {

  public index: number;
  public parentRef: any;

  constructor() { }

  ngOnInit(): void {
  }

  public remove(): void {
    this.parentRef.removeItem(this.index);
  }

}
