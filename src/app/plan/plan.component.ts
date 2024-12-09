import { Component } from '@angular/core';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { FormStepperComponent } from '../form-stepper/form-stepper.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [FormHeaderComponent, FormStepperComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {
  headerTitle: string = "Select your plan";
  headerInfo: string = "You have the option of monthly or yearly billing";
  stepperCount:number = 2;
}
