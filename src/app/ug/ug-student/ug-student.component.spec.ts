import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgStudentComponent } from './ug-student.component';

describe('UgStudentComponent', () => {
  let component: UgStudentComponent;
  let fixture: ComponentFixture<UgStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
