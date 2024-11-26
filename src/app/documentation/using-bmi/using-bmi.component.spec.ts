import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingBmiComponent } from './using-bmi.component';

describe('UsingBmiComponent', () => {
  let component: UsingBmiComponent;
  let fixture: ComponentFixture<UsingBmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsingBmiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
