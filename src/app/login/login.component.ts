import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule,RouterLink,FooterComponent], // Add CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected property name
})
export class LoginComponent {
  phone: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Implement your login logic here
    console.log('Login submitted with Phone:', this.phone, 'Password:', this.password);
    // Navigate to dashboard or home page upon successful login
    this.router.navigate(['/home']);
  }
}
