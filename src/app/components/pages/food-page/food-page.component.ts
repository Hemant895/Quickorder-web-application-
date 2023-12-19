import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { cart } from 'src/app/shared/models/Cart';
import { cartitem } from 'src/app/shared/models/Cartitem';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food:any;
  cart!:cart;
  constructor(private foodService :FoodService , private activatedRoute:ActivatedRoute, private cartService: CartService,
    private router :Router,private addtocartservice:CartService ,) {
    this.activatedRoute.params.subscribe((params) => {
      if (params._id){
         this.foodService.getFoodById(params._id).subscribe((server)=>{
          this.food =server;
         });
      }
      
    })
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart=  cart;
    })
   }

  ngOnInit(): void {
  }
addToCart(){
this.addtocartservice.addToCart(this.food);
this.router.navigateByUrl('/cart-page')
}
changeQuantity(cartItem:cartitem,quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity);
}
}
