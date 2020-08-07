import {Injectable} from '@angular/core';
import { EmployeeData } from '../../data/employee-data.model';
import { RequestListService } from '../request-list.service';
import { RequestDataStore } from 'src/app/data/data.model';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

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
    const obj = {
      assignedEmpId: +this.requestUpdate.assignedEmpId,
      createdEmpId: +this.requestUpdate.createdEmpId,
      createdOn: this.requestUpdate.createdOn,
      lastModifiedBy: this.requestUpdate.lastModifiedBy,
      lastModifiedOn: this.requestUpdate.lastModifiedOn,
      requestCategory: this.requestUpdate.requestCategory,
      requestDepartment: this.requestUpdate.requestDepartment,
      requestId: this.requestUpdate.requestId,
      requestStatus: this.requestUpdate.requestStatus,
      requestSubCategory: this.requestUpdate.requestSubCategory,
      requestSummary: this.requestUpdate.requestSummary,
      requestType: this.requestUpdate.requestType,
      title: this.requestUpdate.title,
      comment: comment
    }
    this.http.put('https://localhost:44355/api/request/UpdateRequest/'+ selectedRequestId, obj).subscribe();
  }
}
