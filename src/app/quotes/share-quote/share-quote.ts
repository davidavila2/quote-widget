import { Component, input, output } from '@angular/core';

interface Quote {
  id: string;
  quote: string;
  author: string;
}

@Component({
  selector: 'app-share-quote',
  imports: [],
  templateUrl: './share-quote.html',
  styleUrl: './share-quote.scss',
})
export class ShareQuote {
  quote = input<Quote>();

  protected shareQuote(quote: Quote): void {
    navigator.share({
      title: `Quote by ${quote.author}`,
      text: quote.quote,
    });
  }
}
