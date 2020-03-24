import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  }
  restaurants(){
    return this._http.get('/all');
  }

  createRes(rest){
    return this._http.post('/restaurant/create', rest);
  }

  oneRes(id){
    return this._http.get(`/restaurant/find/${id}`);
  }

  review(chosen, id){
    return this._http.post(`/restaurant/review/${id}`, chosen);
  }

  update(restaurant, id){
    return this._http.post(`/restaurant/update/${id}`, restaurant);
  }

  delete(id){
    return this._http.delete(`/restaurant/delete/${id}`);
  }

}
