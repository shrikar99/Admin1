import { Injectable } from '@angular/core';
import { EmployeeData } from './employee-data.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {RequestDetailService} from '../request-list/request-details/request-detail.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  employees: EmployeeData [];
  employeesSelected: EmployeeData [];
  rootURL = 'https://localhost:44355/api/employee/getallemployees';

  constructor(private http: HttpClient, private requestDetailService: RequestDetailService) { }

  getEmployees(){
     this.http.get<EmployeeData []>(this.rootURL).pipe(
       map(Response => {
         const emp: EmployeeData [] = [];
         for(const key in Response){
           emp.push({...Response[key]});
         }
         return emp;
       })
     ).subscribe(emp => {
       this.requestDetailService.setEmployees(emp);
     });
  }

}
