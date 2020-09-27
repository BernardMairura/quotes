import { Quote } from 'src/app/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [ 
    new Quote(1,'We never know the love of a parent till we become parents ourselves','Henry Ward Beecher','Bernard')
  ];

   /* new Quote(1,'We never know the love of a parent till we become parents ourselves','Henry Ward Beecher',new Date(2020,3,14)),
    new Quote(2,'The best inheritance a parent can give his children is a few minutes of his time each day.','O. A. Battista',new Date(2020,3,14)),
    new Quote(3,'There is no such thing as a perfect parent. So just be a real one.','SUE ATKINS',new Date(2020,3,14)),
];*/
toggleDetails(index: string | number){
  this.quotes[index].showName = !this.quotes[index].showName;
}

completeQuote(isComplete, index){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}



  constructor() { }

  ngOnInit(): void {
  }

}
