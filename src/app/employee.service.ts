import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Employee} from './Employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // public employees = [
  //   { id : 1, name: 'Amjad', age : 28},
  //   { id : 2, name: 'Imtiaz', age : 25},
  //   { id : 3, name: 'Zeeshan', age : 24},
  // ];
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8181/userDetails');
    // .catch(this.handleError());
  }

  handleError(error: HttpErrorResponse) {}
}
