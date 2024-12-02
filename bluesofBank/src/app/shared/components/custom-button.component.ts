import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `<button [ngClass]="styleClass">{{ label }}</button>`,
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() styleClass: string = 'default-button';
}
