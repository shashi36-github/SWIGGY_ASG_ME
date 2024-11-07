import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,LoginComponent,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent implements OnInit{
  isLoggedIn: boolean = false;
  public items:any
  userName: string | null = '';
  constructor(public cart:CartService,private router: Router,public dialog: MatDialog){}
  ngOnInit(): void {
      this.items=this.cart.getCartItems();
      if (typeof window !== 'undefined') {
        // Check if window is defined (ensuring the code is running in a browser)
      this.isLoggedIn =!!localStorage.getItem('authToken'); 
        this.userName = localStorage.getItem('userName');
      }
  }
  proceedToPayment() {
    if (this.isLoggedIn) {
      this.router.navigate(['/pay']);
    } else {
      this.showLoginPopup();
    }
  }

  showLoginPopup() {
    // Open the dialog for login prompt
    this.dialog.open(LoginComponent, {
      width: '300px',
      data: { message: "Please log in to proceed with the payment." }
    });
  }
  inc(title:any){
    this.items=this.items.map((item:any)=>{
      if(item.title===title){
        return{
          ...item,
          qty:item.qty+1
        }
      }
      return item;
    })

  }
  dec(title:any){
    this.items=this.items.map((item:any)=>{
      if(item.title===title){
        return{
          ...item,
          qty:item.qty-1>0?item.qty-1:1
        }
      }
      return item;
    })
  }
  grandTotal(){
    let total:number=0;
    for(let item of this.items){
      total+=(item.qty*item.price)
    }
    return total;
  }
  
    remove1(title: any) {
      this.items = this.items.filter((item:any) => item.title !== title);
    }

    logout() {
      // Clear the session data (localStorage or sessionStorage)
      localStorage.removeItem('userName');  // or any other session data
      localStorage.removeItem('authToken'); // if you store a token for authentication
  
      // Set the login state to false
      this.isLoggedIn = false;
  
      // Optionally, show a message or a dialog saying "Logged out successfully"
      alert("You have logged out successfully.");
  
      // Redirect the user to the login page (or home page)
      this.router.navigate(['/home']);
    }
    
}

