import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private _urlApi = environment.urlApi + '/pizzas';

  pizzas$ = new BehaviorSubject<Pizza[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  public findAll() {
    return this.http
      .get<Pizza[]>(this._urlApi)
      .pipe(
        tap(pizzas => this.pizzas$.next(pizzas))
      );
  }

  public findOne(id: string) {
    return this.http.get<Pizza>(this._urlApi + '/' + id);
  }

  public updateOne(pizza: Pizza) {
    // return ?
  }

  public deleteOne(id: string) {
    return this.http.delete<Pizza[]>(this._urlApi + '/' + id);
  }
}