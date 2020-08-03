import { Injectable } from '@angular/core';
import {RequestDataService} from '../data/data.service'
import { RequestDataStore } from '../data/data.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService{
  constructor(private requestDataService: RequestDataService) { }

  requests: RequestDataStore[] = this.requestDataService.requestData;
  filteredRequests: RequestDataStore[];

  filterValues( filterDepartment: string,
    filterCategory: string,
    filterSubCategory: string,
    filterStatus: string,
    filterType: string){
            this.filteredRequests = this.requests;
              if(filterDepartment !== ''){
                this.filteredRequests = this.requests.filter(req => req.requestDepartment=== filterDepartment);
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
         this.requestDataService.requestList = this.filteredRequests;
         this.filteredRequests = this.requests;
    }

}
