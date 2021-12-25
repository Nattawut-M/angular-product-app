import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products, Product } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product | undefined;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get 'product id' from route parameters (path variables you define in the route)
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    //  find the product that in arrays (id of product == id of product from route)  
    this.product = products.find( product => product.id === productId);

  }

}
