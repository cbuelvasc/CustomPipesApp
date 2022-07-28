import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseCustom',
})
export class UppercaseCustomPipe implements PipeTransform {
  transform(value: string, change: boolean = true): string {
    return change ? value.toUpperCase() : value.toLowerCase();
  }
}
