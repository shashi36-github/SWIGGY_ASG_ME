import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

interface Restaurant {
  name: string;
  cuisine: string;
  priceForTwo: string;
  location: string;
  distance: string;
  rating: string;
  offers: string[];
  imageUrl: string;
}

interface FoodCategory {
  name: string;
  imageUrl: string;
  navigateTo: () => void;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {}

  // Scroll Functions with Debounce for Performance
  private scrollSubject = new Subject<string>();
  private scrollSubscription: any;

  ngOnInit() {
    this.scrollSubscription = this.scrollSubject.pipe(
      debounceTime(300)
    ).subscribe((item) => {
      this.performScroll(item);
    });
  }

  scrollToLast(item: string) {
    this.scrollSubject.next(item);
  }

  scrollToFirst(item: string) {
    this.scrollSubject.next(item);
  }

  performScroll(item: string) {
    const elStart = document.getElementById(`${item}-start`);
    const elEnd = document.getElementById(`${item}-end`);
    if (elStart) {
      elStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (elEnd) {
      elEnd.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  // Navigation Functions
  navigateToRestaurants() {
    this.router.navigate(['/restaurants']); // Navigate to the restaurants component
  }

  navigateToBreakFastRestaurants() {
    this.router.navigate(['/breakfast']); // Navigate to the breakfast restaurants component
  }

  navigateToFastFoodRestaurants() {
    this.router.navigate(['/fastfood']); // Navigate to the fast food restaurants component
  }

  navigateToItem() {
    this.router.navigate(['/item']); // Navigate to the item component
  }

  // Food Categories Data
  foodCategories: FoodCategory[] = [
    {
      name: "Dosa",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
      navigateTo: () => this.navigateToBreakFastRestaurants()
    },
    {
      name: "Idli",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png",
      navigateTo: () => this.navigateToBreakFastRestaurants()
    },
    {
      name: "Poori",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poori.png",
      navigateTo: () => this.navigateToBreakFastRestaurants()
    },
    {
      name: "Vada",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png",
      navigateTo: () => this.navigateToBreakFastRestaurants()
    },
    {
      name: "Biryani",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
      navigateTo: () => this.navigateToRestaurants()
    },
    {
      name: "Khichdi",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png",
      navigateTo: () => this.navigateToRestaurants()
    },
    {
      name: "Chole Bhature",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png",
      navigateTo: () => this.navigateToBreakFastRestaurants()
    },
    {
      name: "Paratha",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
      navigateTo: () => this.navigateToBreakFastRestaurants()
    },
    {
      name: "Cake",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
      navigateTo: () => this.navigateToFastFoodRestaurants()
    },
    {
      name: "Omelette",
      imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Omelette.png",
      navigateTo: () => this.navigateToBreakFastRestaurants()
    }
  ];

  // Restaurants Data
  restaurants: Restaurant[] = [
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
      offers: ["Flat 20% off on takeaway", "Special 5% discounts on weekends"],
      imageUrl: "https://storage.googleapis.com/a1aa/image/b29C7yDutMboP1bvQdfKhISpDGlpIUmo5YtuglPp5GPBI22JA.jpg",
    }
  ];

  // TrackBy Function for Performance Optimization
  trackById(index: number, restaurant: Restaurant): number {
    return index;
  }

}
