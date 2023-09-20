import { Component } from '@angular/core';
import { Product } from '../model/Products';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  products!: Array<Product>;

  constructor(private service:UserService){}

  ngOnInit() {

    this.products = new Array<Product>();

    const product1 = new Product();
    product1.productId = 1;
    product1.productName = 'book1';
    
    product1.productPrice = 5;

    const product2 = new Product();
    product1.productId =2 ;
    product1.productName = 'book1';
    
    product1.productPrice = 5;

    this.products.push(product1);
    this.products.push(product2);

    this.service.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: Product[]) {
    this.products = response;
  }
  


}
