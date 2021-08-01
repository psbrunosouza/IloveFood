import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '@core/data/restaurant';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  listRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${environment.base_url}/restaurants`);
  }
}
