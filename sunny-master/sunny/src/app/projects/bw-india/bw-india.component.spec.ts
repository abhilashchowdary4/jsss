import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwIndiaComponent } from './bw-india.component';

describe('BwIndiaComponent', () => {
  let component: BwIndiaComponent;
  let fixture: ComponentFixture<BwIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
