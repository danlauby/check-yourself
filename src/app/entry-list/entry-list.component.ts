import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Entry } from './../entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
  @Input() childEntryList: Entry[];

  filterByCalories: string = "allCalories";

  onChange(optionFromMenu) {
  this.filterByCalories = optionFromMenu;
  }


  constructor() { }

  ngOnInit() {
  }
}
