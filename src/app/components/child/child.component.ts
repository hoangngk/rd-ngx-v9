import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements AfterViewChecked, DoCheck {

  @Input() public text: string;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  // ngOnChanges(): void {
  //   console.log('text ', this.text);
  //   console.log('Child OnChanges invoked');
  // }

  ngDoCheck(): void {
    console.log('Child DoCheck invoked');
  }

  ngAfterViewChecked(): void {
    console.log('Child AfterViewChecked invoked');
  }
}
