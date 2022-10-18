import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgStaffComponent } from './ug-staff.component';

describe('UgStaffComponent', () => {
  let component: UgStaffComponent;
  let fixture: ComponentFixture<UgStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
