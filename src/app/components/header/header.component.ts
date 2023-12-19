import { Component, Input, OnInit, TemplateRef, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
   token:any = '{}'
   username:any;
   email:any;
   loggedinUser?:string
  cartQuantity=0;
  constructor(cartService:CartService,private router:Router) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
   }
  ngOnInit(): void {
    setInterval(()=>{
      this.token = localStorage.getItem('token')
      this.username = localStorage.getItem('username');
      this.email = localStorage.getItem('email');
      this.loggedin()
    });
  }
  signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    // this.router.navigate(["/login"]);
  }
  loggedin()
  {
    this.loggedinUser = localStorage.getItem('token') || '{}';
    return this.loggedinUser;
  }
  private offcanvasService = inject(NgbOffcanvas);

	openNoAnimation(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { panelClass: 'details-panel',animation: true});
	}
}
