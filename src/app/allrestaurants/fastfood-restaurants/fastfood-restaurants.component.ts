import { Component } from '@angular/core';
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
  deliveryTime: number; // in minutes
}

@Component({
  selector: 'app-fastfood-restaurants',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './fastfood-restaurants.component.html',
  styleUrls: ['./fastfood-restaurants.component.css']
})
export class FastfoodRestaurantsComponent {
  restaurants: Restaurant[] = [
    {
      name: "Burger Palace",
      cuisine: "Fast Food",
      priceForTwo: "₹500 for two",
      location: "MG Road, Bangalore",
      distance: "0 km",
      rating: "4.5",
      offers: ["Flat 20% off on first order", "Free fries with every burger"],
      imageUrl: "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      deliveryTime: 25
    },
    {
      name: "Pizza Hub",
      cuisine: "Italian",
      priceForTwo: "₹600 for two",
      location: "Jayanagar, Bangalore",
      distance: "1 km",
      rating: "4.7",
      offers: ["Buy 1 Get 1 on medium pizzas", "Free garlic bread with every order"],
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      deliveryTime: 30
    },
    {
      name: "Sandwich Express",
      cuisine: "Fast Food",
      priceForTwo: "₹300 for two",
      location: "Indiranagar, Bangalore",
      distance: "2 km",
      rating: "4.3",
      offers: ["Flat 10% off on online orders", "Free drink with every sandwich"],
      imageUrl: "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg",
      deliveryTime: 20
    },
    {
      name: "Fries Factory",
      cuisine: "Fast Food",
      priceForTwo: "₹250 for two",
      location: "Koramangala, Bangalore",
      distance: "1.5 km",
      rating: "4.2",
      offers: ["Flat 15% off on large fries", "Free dipping sauce with every order"],
      imageUrl: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg",
      deliveryTime: 15
    },
    {
      name: "Taco Town",
      cuisine: "Mexican",
      priceForTwo: "₹400 for two",
      location: "Whitefield, Bangalore",
      distance: "3 km",
      rating: "4.4",
      offers: ["Flat 10% off on taco combos", "Free nachos with orders above ₹500"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "non-veg",
      deliveryTime: 35
    },
    {
      name: "Wrap It Up",
      cuisine: "Fast Food",
      priceForTwo: "₹350 for two",
      location: "Brigade Road, Bangalore",
      distance: "4 km",
      rating: "4.6",
      offers: ["Flat 15% off on wraps", "Free drink with every wrap"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1679287668420-80c27ea4fb31?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "veg",
      deliveryTime: 28
    }
  ];

  selectedType: 'all' | 'veg' | 'non-veg' = 'all';
  sortOrder: 'asc' | 'desc' = 'asc';
  deliveryTimeFilter: boolean = false;
  priceRange: '300-600' | 'below-300' | null = null;

  get filteredRestaurants(): Restaurant[] {
    let filtered = [...this.restaurants];

    // Filter by type
    if (this.selectedType !== 'all') {
      filtered = filtered.filter(res => res.type === this.selectedType);
    }

    // Filter by delivery time
    if (this.deliveryTimeFilter) {
      filtered = filtered.filter(res => res.deliveryTime < 30);
    }

    // Filter by price range
    if (this.priceRange) {
      if (this.priceRange === '300-600') {
        filtered = filtered.filter(res => {
          const price = parseInt(res.priceForTwo.replace(/[^\d]/g, ''));
          return price >= 300 && price <= 600;
        });
      } else if (this.priceRange === 'below-300') {
        filtered = filtered.filter(res => {
          const price = parseInt(res.priceForTwo.replace(/[^\d]/g, ''));
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

  setType(type: 'all' | 'veg' | 'non-veg'): void {
    this.selectedType = type;
  }

  toggleSort(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  toggleDeliveryTime(): void {
    this.deliveryTimeFilter = !this.deliveryTimeFilter;
  }

  togglePriceRange(range: '300-600' | 'below-300'): void {
    this.priceRange = this.priceRange === range ? null : range;
  }

  trackByName(index: number, restaurant: Restaurant): string {
    return restaurant.name;
  }
}
