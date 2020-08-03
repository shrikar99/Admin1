import { Injectable } from '@angular/core';
import { EmployeeData } from './employee-data.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService implements EmployeeData {

  constructor() { }
}
