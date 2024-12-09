import { Component } from '@angular/core';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { FormStepperComponent } from '../form-stepper/form-stepper.component';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [FormHeaderComponent, FormStepperComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  headerTitle:string = "Personal Info";
  headerInfo:string = "Please provide your name, email and phone number.";
  stepperCount:number = 1;
}
