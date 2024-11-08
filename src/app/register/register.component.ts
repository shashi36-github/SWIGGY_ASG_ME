import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationServiceService } from './registration-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule], // Add CommonModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected property name
})
export class RegisterComponent {
  name: string = ''; 
  email: string = '';
  phone: string = '';
  password: string = ''; // Added password property

  constructor(private registrationService: RegistrationServiceService, private router: Router) {}

  onSubmit() {
    const userData = { 
      name: this.name, 
      email: this.email, 
      phone: this.phone,
      password: this.password // Include password in the data
    };

    // Optional: Check if phone number already exists
    this.registrationService.checkPhoneNumber(this.phone).subscribe({
      next: (existingUsers) => {
        if (existingUsers.length > 0) {
          alert('Phone number already registered. Please use a different number.');
        } else {
          // Proceed with registration
          this.registrationService.registerUser(userData).subscribe({
            next: (response) => {
              console.log('User registered successfully:', response);
              localStorage.setItem('userName', this.name); // Storing the name

              this.router.navigate(['/login']); // Navigate to login page on success
            },
            error: (error) => {
              console.error('Registration failed:', error);
              alert('Registration failed. Please try again later.');
            },
            complete: () => {
              console.log('Registration request completed');
            }
          });
        }
      },
      error: (error) => {
        console.error('Error checking phone number:', error);
        alert('An error occurred. Please try again later.');
      }
    });
  }
}
