import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { RequestDataService } from '../data/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isFilterSelected = false;
  constructor(private router: Router, public requestDataService: RequestDataService) { }

  ngOnInit(): void {
    this.isFilterSelected = false;
  }

  onClickLogo(){
    this.requestDataService.requestList = this.requestDataService.requestData;
    this.router.navigate(['/']);
  }

  selectFilter(){
    this.isFilterSelected = !this.isFilterSelected;
    this.router.navigate(['/dashboard/filter']);
  }

}
