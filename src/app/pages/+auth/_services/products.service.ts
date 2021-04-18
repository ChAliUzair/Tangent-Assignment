import { Injectable } from '@angular/core';
import { getItem, setItem, StorageItem } from '@app/@core/utils';
import { defaultData } from './default-data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() {}

  getProducts() {
    return getItem(StorageItem.Products);
  }

  setProducts(products:any) {
    return setItem(StorageItem.Products, products);
  }

  getCart() {
    return getItem(StorageItem.Cart);
  }

  setCart(items:any) {
    return setItem(StorageItem.Cart, items);
  }

  setupDefaultProductsIfNotAlready() {
    const products:any = [];
    if(!getItem(StorageItem.Products)) {
      setItem(StorageItem.Products, defaultData.products);
    }
    if(!getItem(StorageItem.User)) {
      setItem(StorageItem.User, defaultData.user);
    }
    if(!getItem(StorageItem.Cart)) {
      setItem(StorageItem.Cart, []);
    }
  }
}
