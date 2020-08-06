import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { RequestListService } from '../request-list/request-list.service';
import { FilterService } from '../filter/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, public requestListService: RequestListService, public filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.isFilterSelected = false;
  }

  onClickLogo(){
    this.requestListService.requestList = this.requestListService.requests;
    this.router.navigate(['/']);
  }

  selectFilter(){
    this.filterService.isFilterSelected = !this.filterService.isFilterSelected;
    this.router.navigate(['/dashboard/filter']);
  }

}
