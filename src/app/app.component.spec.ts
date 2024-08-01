import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should calculate total amount per person', () => {
    component['billAmount'].set(300);
    component['persons'].set(2);
    component['tip'].set(5);
    expect(component['totalAmount']()).toBe(157.5);
    fixture.detectChanges();
    const result: HTMLElement = fixture.debugElement.query(
      By.css('[data-test-id="result"]')
    ).nativeElement;
    expect(result.textContent?.trim()).toBe('Total / person  $157.50');
  });
});
