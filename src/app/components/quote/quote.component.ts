import { Quote } from 'src/app/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [ 
    new Quote('We never know the love of a parent till we become parents ourselves','Henry Ward Beecher','Bernard',),
    new Quote('The best inheritance a parent can give his children is a few minutes of his time each day.','O. A. Battista','Bernard', ),
    new Quote('There is no such thing as a perfect parent. So just be a real one.','SUE ATKINS','Bernard'),
];

addQuote(chosenQuote) {
  this.quotes.push(chosenQuote)
}

upVote(i) {
  this.quotes[i].upVote ++;
}
downVote(i) {
  this.quotes[i].downVote  ++;
}
delQuote(i) {
  this.quotes.splice(i, 1)
}
preNum:number
lastNum:number
counter:number

highestUpvote(){
  this.preNum = 0
  this.lastNum = 0

  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNum = this.quotes[this.counter].upVote;
    if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  }
  return  this.preNum
}


/*
completeQuote(isComplete: any, index: number){
  if (isComplete) {
    this.quotes.splice(index,1);
  }*/



  constructor() { }

  ngOnInit(): void {
  }

}
