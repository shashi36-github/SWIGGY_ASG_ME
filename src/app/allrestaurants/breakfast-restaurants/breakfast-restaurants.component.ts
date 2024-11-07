import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-breakfast-restaurants',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterLink],
  templateUrl: './breakfast-restaurants.component.html',
  styleUrl: './breakfast-restaurants.component.css'
})
export class BreakfastRestaurantsComponent {
  restaurants = [
    {
      id:1,
      name: "Idli House",
      cuisine: "South Indian",
      priceForTwo: "₹200 for two",
      location: "MG Road, Bangalore",
      distance: "0 km",
      rating: "4.5",
      offers: ["Flat 10% off on pre-booking", "Free delivery on orders above ₹300"],
      imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      type: "veg"
    },
    {
      id:2,
      name: "Dosa Corner",
      cuisine: "South Indian",
      priceForTwo: "₹250 for two",
      location: "Jayanagar, Bangalore",
      distance: "1 km",
      rating: "4.3",
      offers: ["Flat 15% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://images.unsplash.com/photo-1665660710687-b44c50751054?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      type: "veg"
    },
    {
      id:3,
      name: "Chapati Delight",
      cuisine: "North Indian",
      priceForTwo: "₹300 for two",
      location: "Indiranagar, Bangalore",
      distance: "2 km",
      rating: "4.0",
      offers: ["Buy 1 Get 1 on Chapatis", "Free dessert with orders above ₹500"],
      imageUrl: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      type: "non-veg"
    },
    
    {
      id:4,
      name: "Breakfast Bistro",
      cuisine: "Continental",
      priceForTwo: "₹400 for two",
      location: "Brigade Road, Bangalore",
      distance: "4 km",
      rating: "4.6",
      offers: ["Flat 20% off on breakfast combos", "Free delivery on orders above ₹600"],
      imageUrl: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      type: "non-veg" // For variety
    },
    {
      id:5,
      name: "Morning Munchies",
      cuisine: "Mixed Cuisine",
      priceForTwo: "₹350 for two",
      location: "Ulsoor, Bangalore",
      distance: "2.5 km",
      rating: "4.4",
      offers: ["Flat 15% off on group orders", "Free delivery on orders above ₹500"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      type: "veg"
    },
    {
      id:6,
      name: "Pancake Paradise",
      cuisine: "Continental",
      priceForTwo: "₹500 for two",
      location: "Indiranagar, Bangalore",
      distance: "2 km",
      rating: "4.7",
      offers: ["Flat 15% off on pancake stacks", "Free syrup with every order"],
      imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      type: "non-veg" // For variety
    }
  ];
  selectedType: string = 'all'; // Default to show all restaurants
  get filteredRestaurants() {
  if (this.selectedType === 'veg') {
    return this.restaurants.filter(res => res.type === 'veg');
  } else if (this.selectedType === 'non-veg') {
    return this.restaurants.filter(res => res.type === 'non-veg');
  }
  return this.restaurants; // Show all if 'all' is selected

}

setType(type: string) {
  this.selectedType = type;
}
  
}
