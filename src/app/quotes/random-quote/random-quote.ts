import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';

interface Quote {
  id: string,
  quote: string,
  author: string
}

@Component({
  selector: 'app-random-quote',
  imports: [],
  templateUrl: './random-quote.html',
  styleUrl: './random-quote.scss'
})
export class RandomQuote {
  protected readonly quote = httpResource<Quote>(() => `https://dummyjson.com/quotes/random`)


  protected newQuote(): void {
    this.quote.reload();
  }
}
