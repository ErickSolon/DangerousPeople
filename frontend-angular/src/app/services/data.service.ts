import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = "https://localhost:7000/data";
  constructor(private httpClient: HttpClient) { }

  delete(id: string): Observable<Data> {
    return this.httpClient.delete<Data>(this.baseURL+"/"+id);
  }

  add(data: Data): Observable<Data> {
    return this.httpClient.post<Data>(this.baseURL, data);
  }

  update(data: Data, id: string) : Observable<Data> {
    return this.httpClient.put<Data>(this.baseURL+"/"+id, data);
  }

  getById(id: string): Observable<Data> {
    return this.httpClient.get<Data>(this.baseURL+"/"+id);
  }
}
