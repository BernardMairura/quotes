import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Quote}from 'src/app/quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;

  upVote=0;
  downVote=0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
