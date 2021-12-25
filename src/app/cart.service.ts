import { Injectable } from '@angular/core';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // create 'property' of class with 'empty Array' Product
  items: Product[] = [];
  
  constructor() { }

  // method for 'append' item to items array (add to cart)
  addProductToCart(product: Product) {
    this.items.push(product);
  }

  // method for get all of products from cart
  getAllItems() {
    return this.items;
  }

  // method for remove all of products from cart (set an array 'items' to empty array)
  clearCart() {
    this.items = [];
    return this.items;
  }

}
