import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  template: ``,
  standalone: true,
})
export class SearchComponent implements OnInit {
  private route = inject(ActivatedRoute);

  query$ = this.route.queryParams.pipe(
    map((queryParams) => queryParams['query'])
  );
  id$ = this.route.params.pipe(map((params) => params['id']));
  title$ = this.route.data.pipe(map((data) => data['title']));
  searchData$ = this.route.data.pipe(map((data) => data['searchData']));

  ngOnInit() {
    this.query$.subscribe((query) => {
      console.log({ query });
    });
    this.id$.subscribe((id) => {
      console.log({ id });
    });
    this.title$.subscribe((title) => {
      console.log({ title });
    });
    this.searchData$.subscribe((searchData) => {
      console.log({ searchData });
    });
  }
}
