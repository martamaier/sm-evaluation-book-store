import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayDisplay'
})
export class ArrayDisplayPipe implements PipeTransform {
  transform(value: string[] | number[]): string {
    return Array.isArray(value) ? value.join(', ') : '';
  }
}
