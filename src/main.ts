import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterModule,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { SearchComponent } from './search.component';
import { NewSearchComponent } from './new-search.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div style="display: flex; gap: 10px; flex-direction: column; margin-bottom: 10px">
      <a routerLink="/search">
        Go to /search
      </a>

      <a routerLink="/search" [queryParams]="{ query: 'Angular' }">
        Go to /search?query=Angular
      </a>

      <a routerLink="/search/222" [queryParams]="{ query: 'IsCool' }">
        Go to /search/222?query=IsCool
      </a>
    </div>
    
    <router-outlet />
  `,
})
export class App {}

const routes: Routes = [
  {
    path: 'search',
    // component: SearchComponent, // uncomment this for component with ActivatedRoute
    component: NewSearchComponent,
    data: { title: 'Hello world!' },
  },
  {
    path: 'search/:id',
    // component: SearchComponent,  // uncomment this for component with ActivatedRoute
    component: NewSearchComponent,
    data: { title: 'Hello world!' },
    resolve: { searchData: () => 'Search data!!' },
  },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding() // <-- enable the feature
    ),
  ],
});
