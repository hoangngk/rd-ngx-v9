import { MultiSelectionCheckboxDirective } from 'src/app/multi-selection-checkbox.directive';
import { ISelectionItem } from './models/selection-item.model';
import { BoxComponent } from './components/box/box.component';
import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { fromEvent, Subscription, Observable, merge, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(BoxComponent) public boxes: QueryList<BoxComponent>;
  @ViewChildren(MultiSelectionCheckboxDirective) public skillsCheckboxes: QueryList<MultiSelectionCheckboxDirective>;
  public programingLanguages = [
    {
      name: 'PHP'
    },
    {
      name: 'Ruby'
    },
    {
      name: 'Angular'
    },
    {
      name: 'JS'
    },
    {
      name: 'Python'
    }
  ];

  public group: FormGroup;

  constructor() {
    this.group = new FormGroup({
      skills: new FormArray(this.programingLanguages.map(() => new FormControl(false)))
    });
  }

  public get skills() {
    return this.group.get('skills') as FormArray;
  }

  public ngAfterViewInit(): void {
    const boxes = new MultiSelection<BoxComponent>(this.boxes);
    const skillsSelection = new MultiSelection<MultiSelectionCheckboxDirective>(this.skillsCheckboxes);

    skillsSelection.activeChanges$.subscribe((selected) => console.log('selected ', selected) );
  }
}

export class MultiSelection<T extends ISelectionItem> {

  private subscription: Subscription;
  private lastIndex: number;
  private activeChanges = new Subject();

  public activeChanges$ = this.activeChanges.asObservable();

  constructor(private items: QueryList<T>) {
    this.init();
  }

  public init(): void {
    const clicks$: Observable<any>[] = this.getListeners();

    this.subscription = merge(...clicks$).subscribe(({ comp, isShift, index }) => {
      if (isShift === false) {
        comp.isActive() ? comp.setInactive() : comp.setActive();
        this.lastIndex = index;
      } else {
        const start = index;
        const end = this.lastIndex;
        const range = [Math.min(start, end), Math.max(start, end) + 1];
        const inRange = this.items.toArray().slice(...range);

        const isActive = comp.isActive();
        inRange.forEach(current => isActive ? current.setInactive() :
                                              current.setActive());
      }

      this.activeChanges.next(this.getActives());
    });
  }

  public destroy(): void {
    this.subscription.unsubscribe();
  }

  private getListeners(): Observable<any>[] {
    return this.items.map((item, index) => {
      return fromEvent(item.getElement(), 'click').pipe(
        map((event: MouseEvent) => {
          return {
            index,
            isShift: event.shiftKey,
            comp: item
          };
        })
      );
    });
  }

  private getActives(): T[] {
    return this.items.filter(i => i.isActive());
  }
}
