import {
  booleanAttribute,
  Component,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  label = input.required<string>();
  isActive = input<boolean>(false);
  type = input<'primary' | 'secondary'>('primary', { alias: 'buttonType' });
  disabled = input(false, {
    transform: booleanAttribute,
  });
  onBtnClick = output<MouseEvent>();
  count = signal<number>(0);

  handleClick(event: MouseEvent): void {
    this.onBtnClick.emit(event);
    this.count.update((count) => count + 1);
  }
}
