import { Component } from '@angular/core';

@Component({ 
  selector: 'auction-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host-1';
  constructor() {
    // eslint-disable-next-line no-console
    console.log(this.title)
    
  }
}
