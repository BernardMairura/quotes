import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote} from 'src/app/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  /*@Output() emitQoute=new EventEmitter 

  qQuote:string
  qAuthor: string;
  qEditor: string;
  qQuotes:any;


  submitQuote(){
  this.qQuotes=new Quote(0,"","","")

  this.emitQoute.emit(this.qQuotes)
   }*/

   @Output() emitQuote= new EventEmitter()
  qQuote:string
  qEditor:string
  qAuthor:string
  qDate:number
  Words:any

  submitQuote(){
    this.Words = new Quote(this.qEditor,this.qAuthor,this.qQuote)
    this.qQuote=''
    this.qAuthor=''
    this.qEditor=''
    this.emitQuote.emit(this.Words)
  }


  

  constructor() {}
 
  ngOnInit(): void {
  }

}
