import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'infinity',
  standalone: true,
})
export class InfinityPipe implements PipeTransform {
  transform(value: number): number {
    return value === Infinity ? 0 : value;
  }
}
