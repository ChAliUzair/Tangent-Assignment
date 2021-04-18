import { Component, OnInit } from '@angular/core';
import { AuthService } from '../+auth/_services/auth.service';
import { ProductService } from '../+auth/_services/products.service';

@Component({
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  products:any;
  cart:any;
  user:any;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.cart = this.productService.getCart();
    this.user = this.authService.currentUser();
  }

  getProductDiscounts(product:any){
    return product.discount.filter((d:any) => d.user_level == this.user.level);
  }
  getUnitPrice(cartProduct:any){
    const discounts = cartProduct.product.discount && this.getProductDiscounts(cartProduct.product);
    if(!discounts) return cartProduct.product.price;
    if(discounts[0].discount_type == 'after_minimum_purchase_fix_discount_price' && cartProduct.qty >= discounts[0].minimum_items)
      return discounts[0].discount_price_per_item;
    else if(discounts[0].discount_type == 'free_item_with_item' && cartProduct.qty >= (discounts[0].to_purchase + discounts[0].free_products)) {
      return (discounts[0].to_purchase * cartProduct.product.price) / (discounts[0].to_purchase + discounts[0].free_products)
    } else return cartProduct.product.price;
  }
  getItemTotalPrice(cartProduct:any){
    return this.getUnitPrice(cartProduct) * cartProduct.qty;
  }
  getCartTotalPrice(){
    return this.cart.reduce((a:any, b:any) => +a + +this.getItemTotalPrice(b), 0);
  }

  addToCart(product:any) {
    // Flow
    //   Check if item present in cart
    //     Yes
    //       Increase quantity
    //     No
    //       Insert
    if(this.cart.find((p:any) => p.product.name == product.name)) {
      this.cart.find((p:any) => p.product.name == product.name).qty ++;
    } else {
      this.cart.push({product, qty: 1});
    }
    this.productService.setCart(this.cart)
  }

  removeFromCart(index:any) {
    this.cart.splice(index, 1);
  }
}
