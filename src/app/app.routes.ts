import { Routes } from '@angular/router';
import { Quotes } from './quotes/quotes';
import { QuoteList } from './quotes/quote-list/quote-list';
import { RandomQuote } from './quotes/random-quote/random-quote';

export const routes: Routes = [
    {
        path: 'random-quote',
        component: RandomQuote
    },
    {
        path: 'quote-list',
        component: QuoteList
    },
    {
        path: '',
        redirectTo: 'random-quote',
        pathMatch: 'full'
    }
];
