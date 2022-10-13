import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { table } from 'console';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {


  BASEURL = "http://localhost:3000/api"

  constructor(private _http: HttpClient) { }

  getAllData(table: any): Observable<any> {
    const apiurl = this.BASEURL + '/getUsers/' + table;
    return this._http.get(apiurl);
  }

  getMarks(data: any): Observable<any> {
    const apiurl = this.BASEURL + '/getMarks/' + data
    return this._http.get(apiurl);
  }

  createData(data: any, id: any): Observable<any> {
    const apiurl = this.BASEURL + '/insertUser/' + id
    return this._http.post(apiurl, data);
  }

  updateDate(data: any): Observable<any> {
    const apiurl = this.BASEURL + '/updateUser'
    return this._http.put(apiurl, data);
  }
  updateMarks(data: any, table: any): Observable<any> {
    const apiurl = this.BASEURL + '/updateMarks/' + table;
    return this._http.put(apiurl, data);
  }

  deleteData(data: any): Observable<any> {
    console.log(data);

    const apiurl = this.BASEURL + '/deleteUser/' + data
    return this._http.delete(apiurl);
  }
}
