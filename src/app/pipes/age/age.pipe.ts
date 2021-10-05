import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    let year = new Date(Date.now()).getFullYear(); // Now it's 2021
    let age = year - value;
    return age;
  }

}
