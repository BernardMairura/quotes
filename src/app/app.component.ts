import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes=[ 'We never know the love of a parent till we become parents ourselves','The best inheritance a parent can give his children is a few minutes of his time each day.',
    'There is no such thing as a perfect parent. So just be a real one.']
  }
}
