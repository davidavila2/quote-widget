import { httpResource } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';

interface Quote {
  id: string,
  quote: string,
  author: string
}

interface QuotesList{
  total: number,
  skip: number,
  limit: number,
  quotes: Quote[]
}

@Component({
  selector: 'app-quote-list',
  imports: [],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.scss'
})
export class QuoteList {
  protected readonly skipCount = signal(0);
  protected readonly disablePrevious = computed(() => this.skipCount() === 0)
  protected readonly quotes = httpResource<QuotesList>(() => `https://dummyjson.com/quotes?limit=10&skip=${this.skipCount()}`)

  protected previous(): void {
   this.skipCount.set(this.skipCount() - 10)
  }
  protected next(): void {
   this.skipCount.set(this.skipCount() + 10)
  }
}
