import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the value properly', async () => {
    fixture.componentRef.setInput('value', 10);
    const inputElem: HTMLInputElement = fixture.debugElement.query(
      By.css('[data-test-id="custom-input"]')
    ).nativeElement;
    await fixture.whenStable();
    expect(inputElem.value).toEqual('10');
  });

  it('should emit new value when input value changes', (done) => {
    let expectedValue: number | string = 0;
    component.value.subscribe((val) => {
      expectedValue = val;
      done();
    });
    component.onValueChange('300');
    expect(expectedValue).toEqual(300);
  });
});
