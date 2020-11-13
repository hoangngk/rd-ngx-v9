import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCompComponent } from './lib-comp.component';

describe('LibCompComponent', () => {
  let component: LibCompComponent;
  let fixture: ComponentFixture<LibCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
