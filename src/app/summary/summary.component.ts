import { Component } from '@angular/core';
import { FormStepperComponent } from '../form-stepper/form-stepper.component';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [FormStepperComponent, FormHeaderComponent, ThankYouComponent, CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  headerTitle:string = "Finishing up";
  headerInfo:string = "Double-check everything looks OK before confirming.";
  stepperCount: number = 4;
  isFormSubmitted: boolean = false;
}
