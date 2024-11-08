import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

interface Restaurant {
  name: string;
  cuisine: string;
  priceForTwo: string;
  location: string;
  distance: string;
  rating: string;
  offers: string[];
  imageUrl: string;
  type: 'veg' | 'non-veg';
}

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'] // Corrected from 'styleUrl'
})
export class RestaurantsComponent {
  restaurants: Restaurant[] = [
    {
      name: "Balaji Santosh Family Dhaba",
      cuisine: "North Indian • South Indian",
      priceForTwo: "₹1200 for two",
      location: "Governorpet, Vijayawada",
      distance: "0 km",
      rating: "4.2",
      offers: ["Flat 20% off on pre-booking", "Up to 15% off with bank offers"],
      imageUrl: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg"
    },
    {
      name: "Eat Street",
      cuisine: "Chinese • Thai",
      priceForTwo: "₹900 for two",
      location: "Benz Circle, Vijayawada",
      distance: "2 km",
      rating: "4.0",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg"
    },
    {
      name: "Blue Fox",
      cuisine: "Seafood • Continental",
      priceForTwo: "₹1500 for two",
      location: "MG Road, Vijayawada",
      distance: "3 km",
      rating: "4.5",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1669261880961-ea68f9a2b7f2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg"
    },
    {
      name: "Dawat Family Restaurant",
      cuisine: "Pure Veg • Indian",
      priceForTwo: "₹800 for two",
      location: "Patamata, Vijayawada",
      distance: "4 km",
      rating: "4.3",
      offers: ["Flat 10% off on weekends", "5% cashback with PayTM"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1695029504256-054d9c0e66e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg"
    },
    {
      name: "Harika Royal Restaurant",
      cuisine: "Biryani, South Indian",
      priceForTwo: "₹800 for two",
      location: "Labbipet",
      distance: "20-25 mins",
      rating: "4.1",
      offers: ["One Free delivery", "40% OFF UPTO ₹80"],
      imageUrl: "https://storage.googleapis.com/a1aa/image/OWNT7DFgxeTPdSJcJX8f6PBD8TysbMjxoDj2qOwSyPfVZLdnA.jpg",
      type: "veg"
    },
    {
      name: "Imperial Multi Cuisine",
      cuisine: "North Indian, Chinese, Biryani",
      priceForTwo: "₹1000 for two",
      location: "Benz Circle and Auto Nagar",
      distance: "25-30 mins",
      rating: "3.9",
      offers: ["One Free delivery", "₹75 OFF ABOVE ₹199"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg"
    },
  ];

  selectedType: 'all' | 'veg' | 'non-veg' = 'all'; // Default to show all restaurants
  sortOrder: 'asc' | 'desc' = 'asc';
  deliveryTimeFilter: boolean = false;
  priceRange: '300-600' | 'below-300' | null = null;

  get filteredRestaurants() {
    let filtered = [...this.restaurants];

    // Filter by type
    if (this.selectedType === 'veg') {
      filtered = filtered.filter(res => res.type === 'veg');
    } else if (this.selectedType === 'non-veg') {
      filtered = filtered.filter(res => res.type === 'non-veg');
    }

    // Filter by delivery time
    if (this.deliveryTimeFilter) {
      filtered = filtered.filter(res => {
        // Assuming distance is in "20-25 mins" format
        const match = res.distance.match(/(\d+)-(\d+) mins/);
        if (match) {
          const avgTime = (parseInt(match[1], 10) + parseInt(match[2], 10)) / 2;
          return avgTime < 30;
        }
        return false;
      });
    }

    // Filter by price range
    if (this.priceRange) {
      if (this.priceRange === '300-600') {
        filtered = filtered.filter(res => {
          const price = parseInt(res.priceForTwo.replace(/[^\d]/g, ''), 10);
          return price >= 300 && price <= 600;
        });
      } else if (this.priceRange === 'below-300') {
        filtered = filtered.filter(res => {
          const price = parseInt(res.priceForTwo.replace(/[^\d]/g, ''), 10);
          return price < 300;
        });
      }
    }

    // Sort by rating
    filtered.sort((a, b) => {
      const ratingA = parseFloat(a.rating);
      const ratingB = parseFloat(b.rating);
      return this.sortOrder === 'asc' ? ratingA - ratingB : ratingB - ratingA;
    });

    return filtered;
  }

  setType(type: 'all' | 'veg' | 'non-veg') {
    this.selectedType = type;
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  toggleDeliveryTime() {
    this.deliveryTimeFilter = !this.deliveryTimeFilter;
  }

  togglePriceRange(range: '300-600' | 'below-300') {
    this.priceRange = this.priceRange === range ? null : range;
  }

  trackByName(index: number, restaurant: Restaurant): string {
    return restaurant.name;
  }
}
