import { Component, OnInit, OnDestroy} from '@angular/core';
import { RequestDataStore } from '../../data/data.model';
import { RequestDataService } from '../../data/data.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

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
  constructor(private requestDataService: RequestDataService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.requestDataService.filterDisabled = true;
     this.getRequest();
  }

  ngOnDestroy(){
    this.requestDataService.filterDisabled = false;
  }

  getRequest(){
    this.sub = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.request = this.requestDataService.getRequest(this.id);
      });

  }

  onDetailSubmit(detailForm: NgForm){
     console.log(detailForm.value.requestStatus+ ','+ detailForm.value.requestAssignTo + ', '+detailForm.value.requestComment);
  }

  onCancel(){
     this.router.navigate(['/']);
  }

}
