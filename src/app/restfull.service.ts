import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestfullService {

  constructor(private http:Http ) { }

  getCurrentTime(){
    return this.http.get('http://date.jsontest.com')
      .map(res => res.json());
  }

  validate(order: string){
    console.log(order, 'in http validate');

    let params ='json=' + order;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('http://validate.jsontest.com/', params, options)
    .map(res => res.json());
  }

}
