import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';
import { ISelectionItem } from 'src/app/models/selection-item.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit, ISelectionItem {

  @Input() public id: number;
  @HostBinding('class.active') private active = false;

  constructor(
    private host: ElementRef
  ) { }

  ngOnInit(): void {
  }

  public setActive(): void {
    this.active = true;
  }

  public isActive(): boolean {
    return this.active;
  }

  public setInactive(): void {
    this.active = false;
  }

  public getElement(): HTMLElement {
    return this.host.nativeElement;
  }
}
