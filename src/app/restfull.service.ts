import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestfullService {

  constructor(private http:Http ) { }

  getCurrentTime(){
    return this.http.get('https://sample-order-service.herokuapp.com/orders-data/order')
      .map(res => res.json());
  }
}
