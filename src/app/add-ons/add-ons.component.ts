import { Component } from '@angular/core';
import { FormHeaderComponent } from '../form-header/form-header.component';
import { FormStepperComponent } from '../form-stepper/form-stepper.component';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [FormHeaderComponent, FormStepperComponent],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css'
})
export class AddOnsComponent {
  headerTitle:string = "Pick add-ons";
  headerInfo:string = "Add-ons help enhance your gaming experiance.";
  stepperCount:number = 3;
}
