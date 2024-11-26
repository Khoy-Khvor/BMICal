import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cal',
  templateUrl: './form-cal.component.html',
  styleUrl: './form-cal.component.css',
})
export class FormCalComponent {

  bmi: number | null = null;
  bmiCategory: string = '';


  formGroup: any = new FormGroup({
    weight: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl("", [Validators.required]),
  })

  calculateBMI(event: Event): void {
    event.preventDefault();
    if (this.formGroup.value.weight > 0 && this.formGroup.value.height > 0 &&this.formGroup.value.age > 0 &&this.formGroup.value.gender ) {
      const heightInMeters = this.formGroup.value.height / 100;
      this.bmi = this.formGroup.value.weight / (heightInMeters * heightInMeters);

      // Categorize BMI
      if (this.bmi < 18.5) {
        this.bmiCategory = 'ទម្ងន់តិចពេក';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.bmiCategory = 'ធម្មតា';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.bmiCategory = 'លើសទម្ងន់';
      } else {
        this.bmiCategory = 'ធាត់';
      }
    }
  }

  clear():void{
    this.formGroup.get('weight').setValue('')
    this.formGroup.get('height').setValue('')
    this.formGroup.get('age').setValue('')
    this.formGroup.get('gender').setValue('')
  }
}
