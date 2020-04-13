import { Component } from '@angular/core';

@Component({
  selector: 'ws-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class="nav nav-pills">
      <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
      <li><a class="nav-link" [routerLink]="['/products']">Product List</a></li>
    </ul> 
  `
})
export class AppComponent {
  pageTitle: string = "MbWebSiteAngular";
}