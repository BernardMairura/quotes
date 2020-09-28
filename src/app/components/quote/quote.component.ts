import { Quote } from 'src/app/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [ 
    new Quote('I know that there are millions of Americans who are content with their health care coverage - they like their plan and, most importantly, they value their relationship with their doctor.','Barack Obama','Bernard',),
    new Quote('The doctor should be opaque to his patients and, like a mirror, should show them nothing but what is shown to him..','Sigmund Freud','Bernard', ),
    new Quote('A wise doctor does not mutter incantations over a sore that needs the knife.','Sophocles','Bernard'),
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




  constructor() { }

  ngOnInit(): void {
  }

}
