import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
test:any
final:any
  cart!:cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart  = cart;
    })
   }

  ngOnInit(): void {
  }

}
