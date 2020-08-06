import { Component, OnInit } from '@angular/core';
import { RequestDataService } from './data/data.service';
import {EmployeeDataService} from './data/employee-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private requestDataService: RequestDataService, private employeeDataService: EmployeeDataService){}

  ngOnInit(){
     this.requestDataService.getRequests();
     this.employeeDataService.getEmployees();
  }

}
