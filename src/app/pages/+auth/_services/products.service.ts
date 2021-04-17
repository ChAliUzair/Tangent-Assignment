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

  setupDefaultProductsIfNotAlready() {
    const products:any = [];
    if(!getItem(StorageItem.Products)) {
      setItem(StorageItem.Products, defaultData.products);
      setItem(StorageItem.User, defaultData.user);
    }
  }
}
