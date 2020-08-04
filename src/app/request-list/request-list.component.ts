import { Component, OnInit} from '@angular/core';
import { RequestDataService } from '../data/data.service';
import { RequestDataStore } from '../data/data.model';
import { Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  selected = false;
  view: string = "Table";
  requestList: RequestDataStore[] = [];
  selectedRequest: RequestDataStore;
  constructor(private requestDataService: RequestDataService, private router: Router, private spinnerService: NgxSpinnerService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit(): void {
   this.selected = false;
    console.log('dashboard called');
    this.getRequests();
  }

  getRequests(){
    this.spinnerService.show();
   this.requestList = this.requestDataService.getRequests();
    this.spinnerService.hide();
  }

  onRequestSelect(request: RequestDataStore){
    this.selected= true;
    this.selectedRequest = request;
    this.router.navigate(['dashboard/detail', this.selectedRequest.requestId]);
  }

  onSwitchView(){
    this.view === "Table" ? this.view = "Card" : this.view = "Table";
  }

}
