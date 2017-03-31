import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './../entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
  @Input() childEntryList: Entry[];
  @Output() clickSender = new EventEmitter;


  filterByCalories: string = "allCalories";

  onChange(optionFromMenu) {
  this.filterByCalories = optionFromMenu;
  }

  editButtonHasBeenClicked(entryToEdit: Entry) {
   this.clickSender.emit(entryToEdit);
  }

  highCal(entry) {
      var color;
      if (entry.calories > 500) {
        color = "bg-danger";
      } else if(entry.calories > 4){
        color = "bg-info";
      }
      return color;
    }

  constructor() { }

  ngOnInit() {
  }
}
