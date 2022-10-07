import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {


  BASEURL = "http://localhost:3000/api"

  constructor(private _http: HttpClient) { }

  getAllData(): Observable<any> {
    const apiurl = this.BASEURL + '/getUsers'
    return this._http.get(apiurl);
  }


  createData(data: any): Observable<any> {
    const apiurl = this.BASEURL + '/insertUser'
    return this._http.post(apiurl, data);
  }

  updateDate(data: any): Observable<any>{
    const apiurl = this.BASEURL + '/updateUser'
    return this._http.put(apiurl,data);
  }
}
