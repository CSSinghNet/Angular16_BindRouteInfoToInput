import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: ``,
  standalone: true,
})
export class NewSearchComponent implements OnInit {
  @Input() query?: string; // this will come from the query params
  @Input() id?: string; // this will come from the path params
  @Input() title?: string; // this will come from the data
  @Input() searchData?: any; // this will come from the resolved data

  ngOnInit() {
    console.log({ query: this.query });
    console.log({ id: this.id });
    console.log({ title: this.title });
    console.log({ searchData: this.searchData });
  }
}
