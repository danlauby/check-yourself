import { Component } from '@angular/core';
import { Entry } from './entry.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Check YoSelf!';
  selectedEntry = null;

  masterEntryList: Entry[] = [
    new Entry('Pizza', 'Had pepperoni and cheese toppings. I ate a whole XL myself, yum.', 2543),
    new Entry('Lime', 'Enjoyed a wedge of lime in my Corona. Feeling good about my diet!', 28),
    new Entry('Top Ramen', 'One helping and was light on the seasoning. A well rounded diet for a student.', 654),
  ];
}
