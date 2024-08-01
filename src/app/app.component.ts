import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  OnInit,
  signal,
} from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { ResultViewerComponent } from './shared/components/result-viewer/result-viewer.component';
import { InfinityPipe } from './shared/pipe/infinity.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    ResultViewerComponent,
    InfinityPipe,
    NgOptimizedImage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private injector = inject(Injector);
  protected billAmount = signal<number>(0);
  protected persons = signal(0);
  protected tip = signal(0);

  protected tipAmount = computed(
    () => (this.tip() * this.billAmount()) / 100 || 0
  );

  protected tipAmountPerPerson = computed(
    () => this.tipAmount() / this.persons() || 0
  );

  protected totalAmount = computed(
    () => (this.billAmount() + this.tipAmount()) / this.persons() || 0
  );

  protected tipSelectors = [5, 10, 15, 25, 50];

  ngOnInit(): void {
    effect(
      () => {
        console.log(this.persons(), this.tip(), this.billAmount());
      },
      { injector: this.injector }
    );
  }

  protected handleTipSelection(tip: number): void {
    this.tip.set(tip);
  }

  protected handleReset(): void {
    this.persons.set(0);
    this.billAmount.set(0);
    this.tip.set(0);
  }
}
