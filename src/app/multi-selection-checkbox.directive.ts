import { ISelectionItem } from 'src/app/models/selection-item.model';
import { Directive, Self, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[multiSelectionCheckbox]' })
export class MultiSelectionCheckboxDirective implements ISelectionItem {
  constructor(
    @Self() private controlDirective: NgControl,
    private host: ElementRef
  ) { }

  get control() {
    return this.controlDirective.control;
  }

  public isActive(): boolean {
    return !!this.control.value;
  }

  public setActive(): void {
    this.control.patchValue(true);
  }

  public setInactive(): void {
    this.control.patchValue(false);
  }

  public getElement(): HTMLElement {
    return this.host.nativeElement;
  }
}
