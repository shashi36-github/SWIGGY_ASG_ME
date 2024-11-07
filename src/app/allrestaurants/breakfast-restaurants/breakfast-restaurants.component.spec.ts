import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastRestaurantsComponent } from './breakfast-restaurants.component';

describe('BreakfastRestaurantsComponent', () => {
  let component: BreakfastRestaurantsComponent;
  let fixture: ComponentFixture<BreakfastRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakfastRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreakfastRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
