import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './entry.model';

@Pipe({
  name: 'calories'
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Entry[], desiredCalories) {
     var output: Entry[] = [];
     if(desiredCalories === "lowCalories") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].calories < 500) {
           output.push(input[i]);
         }
       }
       return output;
     } else if (desiredCalories === "highCalories") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].calories >= 500) {
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
   }
}
