import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  scrollToLast(item: String) {
    const el = document.getElementById(`${item}-end`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToFirst(item: String) {
    const el = document.getElementById(`${item}-start`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  restaurants = [
    {
      name: "Hotel Vdara",
      cuisine: "North Indian • South Indian",
      priceForTwo: "₹1200 for two",
      location: "Governorpet, Vijayawada",
      distance: "0 km",
      rating: "4.2",
      offers: ["Flat 20% off on pre-booking", "Up to 15% off with bank offers"],
      imageUrl: "https://storage.googleapis.com/a1aa/image/b29C7yDutMboP1bvQdfKhISpDGlpIUmo5YtuglPp5GPBI22JA.jpg",
    },
    {
      name: "Spice Symphony",
      cuisine: "Chinese • Thai",
      priceForTwo: "₹900 for two",
      location: "Benz Circle, Vijayawada",
      distance: "2 km",
      rating: "4.0",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://storage.googleapis.com/a1aa/image/gBJzuyLTlfXqZKAWcIEEIPEKk9f37IZQLx8IcPTeeHfaAitdC.jpg",
    },
    {
      name: "Blue Lagoon",
      cuisine: "Seafood • Continental",
      priceForTwo: "₹1500 for two",
      location: "MG Road, Vijayawada",
      distance: "3 km",
      rating: "4.5",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://storage.googleapis.com/a1aa/image/QHqjrx4aIhZLGZApLwAJ7tqy3EzX8kLeNl0DJ9sTC4jCI22JA.jpg",
    },
    {
      name: "Veggie Delight",
      cuisine: "Pure Veg • Indian",
      priceForTwo: "₹800 for two",
      location: "Patamata, Vijayawada",
      distance: "4 km",
      rating: "4.3",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://storage.googleapis.com/a1aa/image/b29C7yDutMboP1bvQdfKhISpDGlpIUmo5YtuglPp5GPBI22JA.jpg",
    },
    {
      name: "Grill & Chill",
      cuisine: "BBQ • Fast Food",
      priceForTwo: "₹1000 for two",
      location: "One Town, Vijayawada",
      distance: "5 km",
      rating: "3.9",
      offers: ["Flat 20% off on takeaway", "Special 5%discounts on weekends"],
      imageUrl: "https://storage.googleapis.com/a1aa/image/b29C7yDutMboP1bvQdfKhISpDGlpIUmo5YtuglPp5GPBI22JA.jpg",
    }
  ];
  


  constructor(private router: Router) {}

  navigateToRestaurants() {
    this.router.navigate(['/restaurants']); // Navigate to the item component
  }
  navigateToBreakFastRestaurants() {
    this.router.navigate(['/breakfast']); // Navigate to the item component
  }
  navigateToFastFoodRestaurants() {
    this.router.navigate(['/fastfood']); // Navigate to the item component
  }
  navigateToItem() {
    this.router.navigate(['/item']); // Navigate to the item component
  }
}





