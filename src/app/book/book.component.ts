import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: any = {};
  @Output() emitBook: EventEmitter<any> = new EventEmitter<any>();
  addToCart() {
    this.emitBook.emit(this.book);
  }
}
