import { Injectable } from '@angular/core';
import {RequestListService} from '../request-list/request-list.service';
import { RequestDataStore } from '../data/data.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService{
  isFilterSelected = false;

  constructor(private requestListService: RequestListService) { }
  requests: RequestDataStore[];
  filteredRequests: RequestDataStore[];

  filterValues( filterDepartment: string,
    filterCategory: string,
    filterSubCategory: string,
    filterStatus: string,
    filterType: string){
      this.requests = this.requestListService.requests;
            this.filteredRequests = this.requests;
              if(filterDepartment !== ''){
                this.filteredRequests = this.filteredRequests.filter(req => req.requestDepartment === filterDepartment);
              }else{
                this.filteredRequests = this.requests;
              }
              if(filterCategory !== ''){
                this.filteredRequests = this.filteredRequests.filter(req => req.requestCategory === filterCategory);
              }
              if(filterSubCategory !== ''){
                this.filteredRequests = this.filteredRequests.filter(req => req.requestSubCategory === filterSubCategory);
              }
              if(filterStatus !== ''){
                this.filteredRequests = this.filteredRequests.filter(req => req.requestStatus === filterStatus);
              }
              if(filterType !== ''){
                this.filteredRequests = this.filteredRequests.filter(req => req.requestType === filterType);
              }
         this.requestListService.requestList = this.filteredRequests;
         this.filteredRequests = this.requestListService.requests;
    }

}
