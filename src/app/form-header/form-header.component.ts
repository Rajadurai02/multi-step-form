import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-header',
  standalone: true,
  imports: [],
  templateUrl: './form-header.component.html',
  styleUrl: './form-header.component.css'
})
export class FormHeaderComponent {
    @Input() headerTitle:string = "";
    @Input() headerInfo:string = "";
}
