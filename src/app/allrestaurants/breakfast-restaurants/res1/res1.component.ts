import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../cart.service';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../navbar/navbar.component';

interface Dish {
  title: string;
  src: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-res1',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './res1.component.html',
  styleUrls: ['./res1.component.css'] // Corrected from 'styleUrl'
})
export class Res1Component implements OnInit {
  dishes: Dish[] = [
    {
      title: 'Dosa',
      src: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg',
      qty: 1,
      price: 70
    },
    {
      title: 'Poori',
      src: 'https://www.awesomecuisine.com/wp-content/uploads/2015/01/Yellow-Pumpkin-Poori-Parangikai-Puri.jpg',
      qty: 1,
      price: 80
    },
    // Add more dishes as needed
  ];

  restaurantName: string | null = null;
  cartCount: number = 0;

  constructor(public cart: CartService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cartCount = this.cart.getCartItems().length;
    this.route.params.subscribe(params => {
      this.restaurantName = params['name']; // Retrieve the restaurant name from the route parameters
    });
  }

  // Method to add item to cart
  cart1(item: Dish): void {
    this.cart.addCartItems(item);
    this.cartCount = this.cart.getCartItems().length; // Update cart count
    // Optionally, show a notification or toast here
  }

  // TrackBy function for ngFor to optimize rendering
  trackByTitle(index: number, item: Dish): string {
    return item.title;
  }
}
