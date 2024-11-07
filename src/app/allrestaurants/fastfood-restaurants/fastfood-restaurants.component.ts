import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-fastfood-restaurants',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './fastfood-restaurants.component.html',
  styleUrl: './fastfood-restaurants.component.css'
})
export class FastfoodRestaurantsComponent {
  restaurants = [
    {
      name: "Burger Palace",
      cuisine: "Fast Food",
      priceForTwo: "₹500 for two",
      location: "MG Road, Bangalore",
      distance: "0 km",
      rating: "4.5",
      offers: ["Flat 20% off on first order", "Free fries with every burger"],
      imageUrl: "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Burger image
      type: "non-veg"
    },
    {
      name: "Pizza Hub",
      cuisine: "Italian",
      priceForTwo: "₹600 for two",
      location: "Jayanagar, Bangalore",
      distance: "1 km",
      rating: "4.7",
      offers: ["Buy 1 Get 1 on medium pizzas", "Free garlic bread with every order"],
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Pizza image
      type: "non-veg"
    },
    {
      name: "Sandwich Express",
      cuisine: "Fast Food",
      priceForTwo: "₹300 for two",
      location: "Indiranagar, Bangalore",
      distance: "2 km",
      rating: "4.3",
      offers: ["Flat 10% off on online orders", "Free drink with every sandwich"],
      imageUrl: "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Sandwich image
      type: "veg"
    },
    {
      name: "Fries Factory",
      cuisine: "Fast Food",
      priceForTwo: "₹250 for two",
      location: "Koramangala, Bangalore",
      distance: "1.5 km",
      rating: "4.2",
      offers: ["Flat 15% off on large fries", "Free dipping sauce with every order"],
      imageUrl: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Fries image
      type: "veg"
    },
    {
      name: "Taco Town",
      cuisine: "Mexican",
      priceForTwo: "₹400 for two",
      location: "Whitefield, Bangalore",
      distance: "3 km",
      rating: "4.4",
      offers: ["Flat 10% off on taco combos", "Free nachos with orders above ₹500"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Taco image
      type: "non-veg"
    },
    {
      name: "Wrap It Up",
      cuisine: "Fast Food",
      priceForTwo: "₹350 for two",
      location: "Brigade Road, Bangalore",
      distance: "4 km",
      rating: "4.6",
      offers: ["Flat 15% off on wraps", "Free drink with every wrap"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1679287668420-80c27ea4fb31?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Wrap image
      type: "veg"
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
