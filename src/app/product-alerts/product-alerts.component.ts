import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

// @Component() decorator indicates that the following class is a component. @Component() also provides metadata about the component, including its selector, templates, and styles.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {

  // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
