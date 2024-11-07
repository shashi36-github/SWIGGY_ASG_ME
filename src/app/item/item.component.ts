import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  dishes= [
    {
      title: 'Dosa',
      src: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg',
      qty:1,
      price: 70
    },
    {
      title: 'Poori',
      src: 'https://www.awesomecuisine.com/wp-content/uploads/2015/01/Yellow-Pumpkin-Poori-Parangikai-Puri.jpg',
      qty:1,
      price: 80
    },
  ];
  constructor(public cart : CartService) {} 

  count:any

  ngOnInit(): void {
    this.count=this.cart.getCartItems()
  }

  cart1(item:any){
    console.log(item)
    this.cart.addCartItems(item)
  }

  
}




