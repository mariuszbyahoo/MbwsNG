import { Component } from '@angular/core';

@Component({
  selector: 'ws-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <div>My First Component</div>
    </div>  
    `
})
export class AppComponent {
  pageTitle: string = "MbWebSiteAngular";
}