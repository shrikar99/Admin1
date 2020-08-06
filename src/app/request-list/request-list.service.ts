import {Injectable} from '@angular/core';
import {RequestDataStore} from '../data/data.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RequestListService{
  filterDisabled = false;
  requestsChanged = new Subject<RequestDataStore []>();
  requests: RequestDataStore [];
  requestList: RequestDataStore [];
   constructor(){}
   setRequests(requests: RequestDataStore []){
      this.requests = requests;
     this.requestList = requests;
      this.requestsChanged.next(this.requests);
      console.log(this.requests);
   }

   getRequests(){
     return this.requestList;
   }

   getRequest(id: string){
     return this.requests.find(req => req.requestId === id);
   }
}
