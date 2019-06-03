import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  Quotes = [
    new Quote(1, '-By Martin Fowler','"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."', new Date(2019, 5, 15)),
    new Quote(2, '-By Edsger Dijkstra', '“If debugging is the process of removing software bugs, then programming must be the process of putting them in”', new Date(2019, 35, 21)),
    new Quote(3, '-By Dan Salomon', '“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”', new Date(2019, 6, 20)),
    new Quote(4, '-By Kent Beck', '“Optimism is an occupational hazard of programming: feedback is the treatment.”', new Date(2019, 5, 23)),
    new Quote(5, '-By Eleanor Roosevelt', '"The future belongs to those who believe in the beauty of their dreams."', new Date(2019, 5, 24)),
    new Quote(6, '-By Bill Gates', '“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”', new Date(2019, 5, 25)),
  ]

  toggleDetails(index) {
    this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
  }

  addNewQuote(quote){
    let quotelength = this.Quotes.length;
    quote.id=quotelength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.Quotes.push(quote)
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      this.Quotes.splice(index, 1);
    }
  }

  constructor() { }
  ngOnInit() {
  }

}