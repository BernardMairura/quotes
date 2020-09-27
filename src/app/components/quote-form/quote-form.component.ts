import { Component, OnInit } from '@angular/core';
import { Quote} from 'src/app/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quotes: any;
 

  toggleDetails(index: string | number){
    this.quotes[index].showName = !this.quotes[index].showName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
