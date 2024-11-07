import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastfoodRestaurantsComponent } from './fastfood-restaurants.component';

describe('FastfoodRestaurantsComponent', () => {
  let component: FastfoodRestaurantsComponent;
  let fixture: ComponentFixture<FastfoodRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastfoodRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastfoodRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
