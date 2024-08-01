import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { HttpExampleService } from './services/http-example.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockHttpService: jasmine.SpyObj<HttpExampleService> =
    jasmine.createSpyObj('HttpExampleService', [
      'updateTotalAmount',
      'getTipSelector',
    ]);

  let mockTipAmounts$ = new BehaviorSubject<number[]>([]);

  beforeEach(async () => {
    mockHttpService.getTipSelector.and.returnValue(mockTipAmounts$);
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: HttpExampleService, useValue: mockHttpService },
        provideExperimentalZonelessChangeDetection(),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should calculate total amount per person', async () => {
    component['billAmount'].set(300);
    component['persons'].set(2);
    component['tip'].set(5);
    expect(component['totalAmount']()).toBe(157.5);
    await fixture.whenStable();
    const result: HTMLElement = fixture.debugElement.query(
      By.css('[data-test-id="result"]')
    ).nativeElement;
    expect(result.textContent?.trim()).toBe('Total / person  $157.50');
  });

  it('should get proper tip amounts from service', async () => {
    expect(component['tipSelectors']()).toEqual([]); // initial
    mockTipAmounts$.next([5, 10, 20]);
    expect(component['tipSelectors']()).toEqual([5, 10, 20]);
    await fixture.whenStable();
    const tipSelectorButtons = fixture.debugElement.queryAll(
      By.css('[data-test-id="tip-selector-btn"]')
    );
    expect(tipSelectorButtons.length).toBe(3);
  });
});
