import { Injectable } from '@angular/core';
// import { Response, RequestOptions, Headers } from '@angular/http';
// import { HttpInterceptorService } from '../interceptor/http-interceptor.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private http: HttpClient) { }

  getPeopleService() {
    const url = 'http://my-json-server.typicode.com/eviyuliarti27/datajsonviul/data';
    return this.http.get(url);
  }

  getVideoService() {
    const url = 'https://my-json-server.typicode.com/eviyuliarti27/db2json/data';
    return this.http.get(url);
  }

  getActivityService() {
    const url = 'https://my-json-server.typicode.com/eviyuliarti27/activityjson/data';
    return this.http.get(url);
  }
}
