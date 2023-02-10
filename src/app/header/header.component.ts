import { Component, Input } from '@angular/core';
import { CartItem } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() cartTotal: number = 0;
}
