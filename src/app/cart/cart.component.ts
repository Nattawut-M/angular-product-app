import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //  call method 'getAllItems()' from CartService (using instance injection), return 'all products' that stored in an arrays
  products = this.cartService.getAllItems();
  
  //  create "form checkout" for gather 'user's information'
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  //  method for process data from user'form checkout
  onSubmit(): void {
    // console.warning with data from 'checkfoutForm'
    console.warn(`your order has been submitted`, this.checkoutForm.value);
    
    //  clear all products in cart
    this.products = this.cartService.clearCart();


    this.checkoutForm.reset(); // reset form
  }

}
