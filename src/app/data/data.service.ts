import { RequestDataStore } from './data.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {RequestListService} from '../request-list/request-list.service';

@Injectable({
  providedIn: 'root'
})
export class RequestDataService{
  rootURL = 'https://localhost:44355/api/request';
  requestData: RequestDataStore [];
  requestList: RequestDataStore [];

  constructor(private http: HttpClient, private requestListService: RequestListService ){}


    getRequests(){
     return this.http.get<RequestDataStore []>(this.rootURL+'/getallrequests').pipe(
        map((response) => {
          const req: RequestDataStore[] = [];
          for(const key in response){
              req.push({...response[key]});
          }
          return req;
        })
      ).subscribe(req => {
        this.requestListService.setRequests(req);
      });
    }


    getRequest(id: string){
      return this.http.get<RequestDataStore>(this.rootURL+"/SingleRequest/"+id).pipe(

        map(Response => {
          const req: RequestDataStore = Response;
          return req;
        })
      );
    }

}
