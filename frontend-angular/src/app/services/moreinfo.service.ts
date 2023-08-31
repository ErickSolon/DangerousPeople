import { MoreInfo } from './../models/moreinfo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoreinfoService {
  baseURL = "https://localhost:7000/moreinfo";
  constructor(private httpClient: HttpClient) { }

  delete(id: string): Observable<MoreInfo> {
    return this.httpClient.delete<MoreInfo>(this.baseURL+"/"+id);
  }

  add(moreInfo: MoreInfo) : Observable<MoreInfo> {
    return this.httpClient.post<MoreInfo>(this.baseURL, moreInfo);
  }

  update(moreInfo: MoreInfo, id: string) : Observable<MoreInfo> {
    return this.httpClient.put<MoreInfo>(this.baseURL+"/"+id, moreInfo);
  }

  getById(id: string): Observable<MoreInfo> {
    return this.httpClient.get<MoreInfo>(this.baseURL+"/"+id);
  }
}
