import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '@core/data/restaurant';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { MenuItem } from './restaurant-detail/menu/menu-item/menu-item';
import { ReviewItem } from './restaurant-detail/reviews/review-item/review-item.data';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  listRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${environment.base_url}/restaurants`);
  }

  findRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(
      `${environment.base_url}/restaurants/${id}`
    );
  }

  listRestaurantMenu(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(
      `${environment.base_url}/restaurants/${id}/menu`
    );
  }

  listRestaurantReviews(id: string): Observable<ReviewItem[]> {
    return this.http.get<ReviewItem[]>(
      `${environment.base_url}/restaurants/${id}/reviews`
    );
  }
}
