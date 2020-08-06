import {Injectable} from '@angular/core';
import { EmployeeData } from '../../data/employee-data.model';
import { RequestListService } from '../request-list.service';
import { RequestDataStore } from 'src/app/data/data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestDetailService{
  employees: EmployeeData [];
  requestUpdate: RequestDataStore;
  constructor(private requestListService: RequestListService, private http: HttpClient){}
  setEmployees(emp: EmployeeData []){
      this.employees =emp;
  }

  getEmployeesByDepartment(department: string){
    return this.employees.find(emp => emp.department === department);
  }

  updateRequest(selectedRequestId: string, status: string, empId: number , comment: string){

    this.requestUpdate = this.requestListService.requests.find(req => req.requestId === selectedRequestId);
    this.requestUpdate.requestStatus = status;
    this.requestUpdate.assignedEmpId = empId;

    this.http.put('https://localhost:44355/api/UpdateRequest'+ {selectedRequestId}, this.requestUpdate).subscribe(() => {console.log('request Updated');});
  }
}
