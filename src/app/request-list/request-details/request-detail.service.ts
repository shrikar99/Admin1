import {Injectable} from '@angular/core';
import { EmployeeData } from '../../data/employee-data.model';
import { RequestListService } from '../request-list.service';
import { RequestDataStore } from 'src/app/data/data.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestDetailService{
  employees: EmployeeData [];
  requestUpdate: RequestDataStore;
  rootURL = 'https://localhost:44355/api/request';
  constructor(private requestListService: RequestListService, private http: HttpClient){}
  setEmployees(emp: EmployeeData []){
      this.employees =emp;
  }


  getEmployees(): Observable<EmployeeData []>{
    return this.http.get<EmployeeData []>('https://localhost:44355/api/employee/getallemployees').pipe(
      map(Response => {
        const emp: EmployeeData [] = [];
        for(const key in Response){
          emp.push({...Response[key]});
        }
        return emp;
      }));
 }

  getRequest(id: string): Observable<RequestDataStore>{
    return this.http.get<RequestDataStore>(this.rootURL+"/SingleRequest/"+id).pipe(
      map(Response => {
        const req: RequestDataStore = Response;
        console.log(req);
        return req;
      })
    );
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
    this.http.put(this.rootURL +'/UpdateRequest/'+ selectedRequestId, obj).subscribe();
  }
}
