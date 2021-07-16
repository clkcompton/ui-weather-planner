import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'YOUR_API_KEY';
 
  constructor(private httpClient: HttpClient) { }

  // public getData(){

  //   return this.httpClient.get(`http://localhost:8080`);
  // }
  
}

//The HttpClient get() method is designed to send HTTP GET requests. The syntax is as follows:

//get(url: string, options: {
//   headers?: HttpHeaders;
//   observe: 'response';
//   params?: HttpParams;
//   reportProgress?: boolean;
//   responseType?: 'json';
//   withCredentials?: boolean;
// }): Observable<HttpResponse<Object>>;

// It takes a REST API endpoint and an optional options object and returns an Observable instance.