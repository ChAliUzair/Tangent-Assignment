import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/pages/+auth/_services/auth.service';
import { ProductService } from '@app/pages/+auth/_services/products.service';
import { Path } from '@core/structs';

@Component({
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  products:any;
  customer:any;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.customer = this.authService.currentUser();
  }

  saveAndContinue(){
    this.productService.setProducts(this.products);
    this.authService.setUser(this.customer);
    this.router.navigate([Path.App]);
  }
}
