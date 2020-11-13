import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements DoCheck, AfterViewChecked {

  public text = 'first text';

  constructor(
    private cd: ChangeDetectorRef
  ) {
    // this.cd.detach();
  }

  ngDoCheck(): void {
    console.log('Parent DoCheck invoked');
  }

  ngAfterViewChecked(): void {
    console.log('Parent AfterViewChecked invoked');
    // this.cd.detectChanges();
  }

}
