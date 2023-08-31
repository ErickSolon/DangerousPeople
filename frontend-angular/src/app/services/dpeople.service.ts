import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class DpeopleService {
  baseURL = "https://localhost:7000/people";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<People[]> {
    return this.httpClient.get<People[]>(this.baseURL);
  }

  getById(id: string): Observable<People> {
    return this.httpClient.get<People>(this.baseURL+"/"+id);
  }
}
