import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book, BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  isShow: boolean = true;
  books$: Observable<Book[]>;
  cart: any[] = [];

  constructor(
    private _bookService: BookService,
    private _cartService: CartService
  ) {
    this.books$ = _bookService.getBooks();
    this._cartService.getCart().subscribe((cart) => console.log(cart));
  }

  addToCart(book: Book) {
    this._cartService.addToCart(book);
  }
}
