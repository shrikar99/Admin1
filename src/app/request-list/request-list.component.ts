import { Component, OnInit} from '@angular/core';
import { RequestDataService } from '../data/data.service';
import { RequestDataStore } from '../data/data.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  selected = false;

  requestList: RequestDataStore[] = [];
  selectedRequest: RequestDataStore;
  constructor(private requestDataService: RequestDataService, private router: Router) {
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
   this.requestList = this.requestDataService.getRequests();
  }

  onRequestSelect(request: RequestDataStore){
    this.selected= true;
    this.selectedRequest = request;
    this.router.navigate(['dashboard/detail', this.selectedRequest.requestId]);
  }

}
