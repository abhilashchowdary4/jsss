import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionsOfABoxManComponent } from './confessions-of-a-box-man.component';

describe('ConfessionsOfABoxManComponent', () => {
  let component: ConfessionsOfABoxManComponent;
  let fixture: ComponentFixture<ConfessionsOfABoxManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfessionsOfABoxManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfessionsOfABoxManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
