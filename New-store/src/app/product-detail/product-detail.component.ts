import { Component, OnInit } from '@angular/core';
import{products} from '../products';
import { ActivatedRoute } from '@angular/router';
import{CartService} from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;
  addToCart(product){
     window.alert("You have added this product to cart!");
     this.cartService.addToCart(product);
  }

  constructor(
    private route:ActivatedRoute,
    private cartService:CartService
    ) {
   }

  ngOnInit() {
      this.route.paramMap.subscribe(params=>{
         this.product=products[+params.get('productId')];
      });
  }

}
