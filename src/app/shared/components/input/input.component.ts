import { KeyValuePipe } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [KeyValuePipe, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  value = model<number | string>('');
  label = input<string>('');
  placeholder = input<string>('');
  icon = input<string>();

  onValueChange(change: string): void {
    this.value.set(Number(change));
  }
}
