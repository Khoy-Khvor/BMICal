import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiIntroComponent } from './bmi-intro.component';

describe('BmiIntroComponent', () => {
  let component: BmiIntroComponent;
  let fixture: ComponentFixture<BmiIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
