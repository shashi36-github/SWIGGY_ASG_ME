import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class NavbarComponent implements OnInit {
  constructor(public cart: CartService) {} 

  count: any;

  // State variables to manage dropdown and mobile menu
  isDropdownOpen: boolean = false;
  isMobileMenuOpen: boolean = false;

  ngOnInit(): void {
    this.count = this.cart.getCartItems();
  }

  // Toggle the "Other" dropdown menu
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Toggle the mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Close dropdowns and mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;

    // Close "Other" dropdown if clicked outside
    if (!target.closest('#dropdownButton') && !target.closest('#dropdownMenu')) {
      this.isDropdownOpen = false;
    }

    // Close mobile menu if clicked outside
    if (!target.closest('#mobileMenuButton') && !target.closest('#mobileMenu') && !target.closest('#mobileMenuBackdrop')) {
      this.isMobileMenuOpen = false;
    }
  }
}
