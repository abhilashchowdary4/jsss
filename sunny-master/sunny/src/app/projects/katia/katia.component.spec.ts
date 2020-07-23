import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatiaComponent } from './katia.component';

describe('KatiaComponent', () => {
  let component: KatiaComponent;
  let fixture: ComponentFixture<KatiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
