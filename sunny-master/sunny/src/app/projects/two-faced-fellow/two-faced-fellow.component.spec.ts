import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFacedFellowComponent } from './two-faced-fellow.component';

describe('TwoFacedFellowComponent', () => {
  let component: TwoFacedFellowComponent;
  let fixture: ComponentFixture<TwoFacedFellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoFacedFellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFacedFellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
