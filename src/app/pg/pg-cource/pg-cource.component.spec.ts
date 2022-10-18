import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgCourceComponent } from './pg-cource.component';

describe('PgCourceComponent', () => {
  let component: PgCourceComponent;
  let fixture: ComponentFixture<PgCourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgCourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
