import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: any[] = [];

  constructor() {}

  addCartItems(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.title === item.title);

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      this.cartItems.push({...item, qty: 1});  
    }
  }

  getCartItems() {
    return this.cartItems;
  }
  
}
