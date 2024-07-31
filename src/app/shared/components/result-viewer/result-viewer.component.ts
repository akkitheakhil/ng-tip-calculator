import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-result-viewer',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './result-viewer.component.html',
  styleUrl: './result-viewer.component.scss',
})
export class ResultViewerComponent {
  text = input<string>('');
  subText = input<string>('');
  value = input<number>(0);
  symbol = input<string>('USD');
}
