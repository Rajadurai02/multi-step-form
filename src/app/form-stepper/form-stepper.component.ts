import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-stepper.component.html',
  styleUrl: './form-stepper.component.css'
})
export class FormStepperComponent {
  @Input() stepperCount: number = 0;
}
