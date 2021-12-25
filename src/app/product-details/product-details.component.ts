import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products, Product } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService 
  ) { }

  ngOnInit(): void {
    // get 'product id' from route parameters (path variables you define in the route)
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    //  find the product that in arrays (id of product == id of product from route)  
    this.product = products.find( product => product.id === productId);
  }

  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product);
    console.log(`${product.name} added to cart.`);
  }

}
