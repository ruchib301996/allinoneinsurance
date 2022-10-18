import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgStaffComponent } from './pg-staff.component';

describe('PgStaffComponent', () => {
  let component: PgStaffComponent;
  let fixture: ComponentFixture<PgStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
