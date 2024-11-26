import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BMICal';
  weight: number = 0;
  height: number = 0;
  gender: string = '';
  bmi: number | null = null;
  bmiCategory: string = '';
age: any;

  calculateBMI(event: Event): void {
    event.preventDefault();
    if (this.weight > 0 && this.height > 0 && this.gender) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);

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
}
