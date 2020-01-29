import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    const url = 'http://localhost:8080/hello';    
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test:test123')});
    return this.http.get(url, { headers });
  }
}
