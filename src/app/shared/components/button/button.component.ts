import { booleanAttribute, Component, input, output } from '@angular/core';

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

  handleClick(event: MouseEvent): void {
    this.onBtnClick.emit(event);
  }
}
