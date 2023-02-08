import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
interface IBook {
  name: string;
  author: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  isShow: boolean = true;
  books$: Observable<any>;
  cart: any[] = [];
  constructor(private http: HttpClient) {
    this.books$ = this.http.get('./assets/books.json');
  }

  addToCart(book: any) {
    console.log(book);
  }
}
