import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgCourceComponent } from './ug-cource.component';

describe('UgCourceComponent', () => {
  let component: UgCourceComponent;
  let fixture: ComponentFixture<UgCourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgCourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
