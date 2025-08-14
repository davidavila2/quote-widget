import { httpResource } from '@angular/common/http';
import { Component, computed, signal, output } from '@angular/core';
import { ShareQuote } from '../share-quote/share-quote';

interface Quote {
  id: string;
  quote: string;
  author: string;
}

interface QuotesList {
  total: number;
  skip: number;
  limit: number;
  quotes: Quote[];
}

@Component({
  selector: 'app-quote-list',
  imports: [ShareQuote],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.scss',
})
export class QuoteList {
  protected readonly skipCount = signal(0);
  protected readonly disablePrevious = computed(() => this.skipCount() === 0);
  protected readonly quotes = httpResource<QuotesList>(
    () => `https://dummyjson.com/quotes?limit=10&skip=${this.skipCount()}`
  );
  protected sharedQuote = output<Quote>();

  protected previous(): void {
    this.skipCount.set(this.skipCount() - 10);
  }
  protected next(): void {
    this.skipCount.set(this.skipCount() + 10);
  }

  protected shareQuote(quote: Quote): void {
    this.sharedQuote.emit(quote);
  }
}
