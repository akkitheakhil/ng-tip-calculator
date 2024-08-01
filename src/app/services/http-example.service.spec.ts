import { TestBed } from '@angular/core/testing';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { HttpExampleService } from './http-example.service';

describe('HttpExampleService', () => {
  let service: HttpExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideExperimentalZonelessChangeDetection()],
    });
    service = TestBed.inject(HttpExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
