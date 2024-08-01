import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpExampleService {
  constructor() {}

  getTipSelector(): Observable<number[]> {
    // mocking getting data from service
    return of([5, 10, 15, 25, 50]);
  }

  updateTotalAmount(amount: number) {
    // post value to server
    console.log(amount);
  }
}
