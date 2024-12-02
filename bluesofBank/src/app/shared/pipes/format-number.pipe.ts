import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number, decimals: number = 2): string {
    return value.toFixed(decimals);
  }
}
