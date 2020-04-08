import { Component } from '@angular/core';

@Component({
  selector: 'ws-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <ws-posts></ws-posts>
    </div>  
    `
})
export class AppComponent {
  pageTitle: string = "MbWebSiteAngular";
}