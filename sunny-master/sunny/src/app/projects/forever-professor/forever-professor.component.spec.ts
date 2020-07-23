import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverProfessorComponent } from './forever-professor.component';

describe('ForeverProfessorComponent', () => {
  let component: ForeverProfessorComponent;
  let fixture: ComponentFixture<ForeverProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeverProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeverProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
