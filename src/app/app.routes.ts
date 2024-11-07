import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { RestaurantsComponent } from './allrestaurants/restaurants/restaurants.component';
import { CartComponent } from './cart/cart.component';
import { PayComponent } from './pay/pay.component';
import { FastfoodRestaurantsComponent } from './allrestaurants/fastfood-restaurants/fastfood-restaurants.component';
import { BreakfastRestaurantsComponent } from './allrestaurants/breakfast-restaurants/breakfast-restaurants.component';
import { Res1Component } from './allrestaurants/breakfast-restaurants/res1/res1.component';
export const routes: Routes = [
    { path: '', component:HomeComponent },
    { path: 'home', component:HomeComponent },
    { path: 'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent },
    {path:'item',component:ItemComponent},
    {path:'restaurants',component:RestaurantsComponent},
    {path:'fastfood',component:FastfoodRestaurantsComponent},
    {path:'breakfast',component:BreakfastRestaurantsComponent},
    {path:'res/1',component:Res1Component},
       
    {path:'cart',component:CartComponent},
    {path:'pay',component:PayComponent}
  
];
