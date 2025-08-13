import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Quote {
  id: string,
  quote: string,
  author: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'quotes-widget';
  protected quote = httpResource<Quote>(() => `https://dummyjson.com/quotes/random`)


  protected newQuote(): void {
    this.quote.reload()
  }
}
