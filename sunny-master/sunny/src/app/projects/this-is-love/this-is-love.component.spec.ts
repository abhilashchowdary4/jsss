import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisIsLoveComponent } from './this-is-love.component';

describe('ThisIsLoveComponent', () => {
  let component: ThisIsLoveComponent;
  let fixture: ComponentFixture<ThisIsLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisIsLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisIsLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
