import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CardApiService {
  constructor(private http: HttpClient) {
  }

  getDeck(userid, cb) {
    this.http.get<any>(`/api/getDeck/${userid}`).subscribe(result => {
      console.log(result);
      cb(null, result);
    }, error => {
      console.log('error!');
      console.log(error);
      cb(error, null);
    })
  }

  getCards(userid, cb) {
    this.http.get<any>(`/api/getCards/${userid}`).subscribe(result => {
      console.log(result);
    }, error => {
      console.log('error!');
      console.log(error);
    })
  }
}
