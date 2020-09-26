import { Quote } from 'src/app/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [ 
    {id:1,quote:'We never know the love of a parent till we become parents ourselves',author:'Henry Ward Beecher'},
  {id:2,quote:'The best inheritance a parent can give his children is a few minutes of his time each day.',author:'O. A. Battista'},
  {id:3,quote:'There is no such thing as a perfect parent. So just be a real one.',author:'SUE ATKINS'},
];


  constructor() { }

  ngOnInit(): void {
  }

}
