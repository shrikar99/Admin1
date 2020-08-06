import { Component, OnInit, OnDestroy} from '@angular/core';
import { RequestDataStore } from '../../data/data.model';
import { RequestListService } from '../request-list.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit, OnDestroy {
  request: RequestDataStore;
  id: string;
  sub: Subscription;
  status = ['Open', 'In Progress', 'Close'];
  constructor(private requestListService: RequestListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.requestListService.filterDisabled = true;
     this.getRequest();
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

  onDetailSubmit(detailForm: NgForm){
    //got data here
     console.log(detailForm.value.requestStatus+ ','+ detailForm.value.requestAssignTo + ', '+detailForm.value.requestComment);
     detailForm.reset();
     this.router.navigate(['/']);
  }

  onCancel(){
     this.router.navigate(['/']);
  }

}
