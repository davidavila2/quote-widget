import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'quotes-widget';
  protected readonly links = [
    {route: '/random-quote', label: 'Random Quote'},
    {route: '/quote-list', label: 'Quote List'}
  ]
}
