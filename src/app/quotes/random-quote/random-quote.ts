import { httpResource } from '@angular/common/http';
import { Component, output } from '@angular/core';
import { ShareQuote } from '../share-quote/share-quote';

interface Quote {
  id: string;
  quote: string;
  author: string;
}

@Component({
  selector: 'app-random-quote',
  imports: [ShareQuote],
  templateUrl: './random-quote.html',
  styleUrl: './random-quote.scss',
})
export class RandomQuote {
  protected readonly quote = httpResource<Quote>(
    () => `https://dummyjson.com/quotes/random`
  );
  protected sharedQuote = output<Quote>();

  protected newQuote(): void {
    this.quote.reload();
  }

  protected shareQuote(quote: Quote): void {
    this.sharedQuote.emit(quote);
  }
}
