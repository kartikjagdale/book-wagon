import { Component } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart$: Observable<CartItem[]>;
  cartTotal: number = 0;
  constructor(private _cartService: CartService) {
    this.cart$ = this._cartService
      .getCart()
      .pipe(
        tap((cart: CartItem[]) =>
          cart.forEach(
            (item: CartItem) =>
              (this.cartTotal += item.quantity * item.book.price)
          )
        )
      );
  }
}
