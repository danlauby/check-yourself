import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entry } from './../entry.model';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  @Output() newEntrySender = new EventEmitter();

  submitForm(food: string, details: string, calories: number) {
    var newEntryToAdd: Entry = new Entry(food, details, calories);
    this.newEntrySender.emit(newEntryToAdd);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
