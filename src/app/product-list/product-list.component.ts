import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  products = products;
  product!: Product;

  onNotifyProductSale(product: Product) {
    window.alert(`You will be Notified, when this product '${product.name}' goes on sale.`);
  }

  share(id: number) {
    this.product = this.products.find((product) => product.id === id)!;
    window.alert(
      `The product ID: ${id} has been shared! ${this?.product?.name}`
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
