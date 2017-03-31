import { Component, OnInit, Input } from '@angular/core';
import { Entry } from './../entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
  @Input() childEntryList: Entry[];

  constructor() { }

  ngOnInit() {
  }
}
