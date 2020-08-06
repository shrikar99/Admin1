import { Component, OnInit, OnDestroy} from '@angular/core';
import { RequestDataStore } from '../../data/data.model';
import { RequestListService } from '../request-list.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { EmployeeData } from 'src/app/data/employee-data.model';
import { RequestDetailService } from './request-detail.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit, OnDestroy {
  request: RequestDataStore;
  id: string;
  sub: Subscription;
  employeeList: EmployeeData [];
  status = ['Open', 'In Progress', 'Close'];
  constructor(private requestListService: RequestListService, private route: ActivatedRoute, private router: Router, private requestDetailService: RequestDetailService) { }

  ngOnInit(): void {
    this.requestListService.filterDisabled = true;
     this.getRequest();
     this.getEmployees();
  }

  ngOnDestroy(){
    this.requestListService.filterDisabled = false;
  }

  getRequest(){
    this.sub = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
       this.request = this.requestListService.getRequest(this.id);
      });

  }

  getEmployees(){
    this.employeeList = this.requestDetailService.employees;
    console.log(this.employeeList);
  }



  onDetailSubmit(detailForm: NgForm){
    //got data here
     console.log(detailForm.value.requestStatus+ ','+ detailForm.value.requestAssignTo + ', '+detailForm.value.requestComment);
     this.requestDetailService.updateRequest(this.request.requestId, detailForm.value.requestStatus, detailForm.value.requestAssignTo, detailForm.value.requestComment);
     detailForm.reset();
     this.router.navigate(['/']);
  }



  onCancel(){
     this.router.navigate(['/']);
  }

}
