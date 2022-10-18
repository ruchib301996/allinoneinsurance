import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletestComponent } from './sampletest.component';

describe('SampletestComponent', () => {
  let component: SampletestComponent;
  let fixture: ComponentFixture<SampletestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampletestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have demostring variable and value should be `Hello Angular testing`',async () => {
    fixture= TestBed.createComponent(SampletestComponent);
    component= fixture.debugElement.componentInstance;
    expect(component.demostring).toEqual("Hello Angular testing")
  })
});
