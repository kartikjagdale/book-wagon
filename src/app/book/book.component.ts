import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  @Output() addBook: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() removeBook: EventEmitter<Book> = new EventEmitter<Book>();

  isInCart: boolean = false;

  constructor(private _cartService: CartService) {}

  ngOnInit() {
    this.isInCart = this._cartService.isBookIncart(this.book?.id);
  }

  addToCart() {
    this.isInCart = true;
    this.addBook.emit(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.removeBook.emit(this.book);
  }
}
