import { Component, OnInit, OnDestroy} from '@angular/core';
import { RequestListService } from '../request-list/request-list.service';
import { RequestDataStore } from '../data/data.model';
import { Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit, OnDestroy {
  selected = false;
  view: string = "Table";

  requestList: RequestDataStore[];
  selectedRequest: RequestDataStore;
  constructor(private requestListService: RequestListService, private router: Router, private spinnerService: NgxSpinnerService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit(): void {
   this.selected = false;
   this.requestList = this.requestListService.getRequests();
  }

  ngOnDestroy(){
  }


  onRequestSelect(request: RequestDataStore){
    this.selected= true;
    this.selectedRequest = request;
    this.router.navigate(['detail', this.selectedRequest.requestId]);
  }

  onSwitchView(){
    this.view === "Table" ? this.view = "Card" : this.view = "Table";
  }

}
