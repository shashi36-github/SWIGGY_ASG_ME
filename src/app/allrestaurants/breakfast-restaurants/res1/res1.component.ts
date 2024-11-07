import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../cart.service';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../navbar/navbar.component';
@Component({
  selector: 'app-res1',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './res1.component.html',
  styleUrl: './res1.component.css'
})
export class Res1Component implements OnInit{
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
  restaurantName: string | null = null;
  constructor(public cart : CartService,private route: ActivatedRoute) {} 

  count:any
  

  ngOnInit(): void {
    this.count=this.cart.getCartItems();
    this.route.params.subscribe(params => {
      this.restaurantName = params['name']; // Retrieve the restaurant name from the route parameters
    });
  }

  cart1(item:any){
    console.log(item)
    this.cart.addCartItems(item)
  }
}
