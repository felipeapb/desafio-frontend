import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { build$ } from 'protractor/built/element';


@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  private url: string;

  constructor(private http: HttpClient) {
console.log('service-construtor');

  }
  build(url): any {
    this.url = 'http://localhost:3000/api/' + url;
    return this;
  }
  list(): any  {
    return this.http.get(this.url);
  }
  create(data): any {
    return this.http.post(this.url, data);
  }
  delete(id): any {
    return this.http.delete(this.url + '/' + id );
  }
}
