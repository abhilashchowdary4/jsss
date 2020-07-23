import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasFishComponent } from './christmas-fish.component';

describe('ChristmasFishComponent', () => {
  let component: ChristmasFishComponent;
  let fixture: ComponentFixture<ChristmasFishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristmasFishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
