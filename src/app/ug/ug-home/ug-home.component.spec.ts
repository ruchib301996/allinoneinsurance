import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgHomeComponent } from './ug-home.component';

describe('UgHomeComponent', () => {
  let component: UgHomeComponent;
  let fixture: ComponentFixture<UgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
