import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.service';

interface CartItem {
  id?: number;
  quantity: number;
  book: Book;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {}

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(item: Book) {
    const existingItem = this.cart.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const cartItem: CartItem = { id: item.id, quantity: 1, book: item };
      this.cart.push(cartItem);
    }
    this.cartSubject.next(this.cart);
  }

  removeFromCart(itemId: number) {
    this.cart = this.cart.filter((i) => i.id !== itemId);
    this.cartSubject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}