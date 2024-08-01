import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'CUSTOM BUTTON'); // REQUIRED INPUT
    await fixture.whenStable();
  });

  it('should render button label properly', () => {
    const btnElement: HTMLButtonElement = fixture.debugElement.query(
      By.css('[data-test-id="custom-button"]')
    ).nativeElement;
    expect(btnElement.textContent?.trim()).toEqual('CUSTOM BUTTON');
  });

  it('should active button should contains the  class active', async () => {
    fixture.componentRef.setInput('isActive', true);
    await fixture.whenStable();
    const btnElement: HTMLButtonElement = fixture.debugElement.query(
      By.css('[data-test-id="custom-button"]')
    ).nativeElement;
    expect(btnElement.classList.contains('active')).toBeTruthy();
  });
});
