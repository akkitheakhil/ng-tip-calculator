import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ResultViewerComponent } from './result-viewer.component';

describe('ResultViewerComponent', () => {
  let component: ResultViewerComponent;
  let fixture: ComponentFixture<ResultViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultViewerComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
