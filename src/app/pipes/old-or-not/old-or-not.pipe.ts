import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oldOrNot'
})
export class OldOrNotPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    let oldOrNot = "";

    if (args[0] === "movies") {
      if (value < 2000) {
        oldOrNot = "Old";
      } else {
        oldOrNot = "Not Old";
      }
    } else if (args[0] === "actors") {
      if (value < 1980) {
        oldOrNot = "Old";
      } else {
        oldOrNot = "Not Old";
      }
    }

    return oldOrNot;
  }

}
