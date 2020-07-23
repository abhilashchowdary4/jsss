import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DorasaaniComponent } from './dorasaani.component';

describe('DorasaaniComponent', () => {
  let component: DorasaaniComponent;
  let fixture: ComponentFixture<DorasaaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorasaaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DorasaaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
