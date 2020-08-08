import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { RequestListService } from '../request-list/request-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, public requestListService: RequestListService) { }

  ngOnInit(): void {
  }

  onClickLogo(){
    this.requestListService.requestList = this.requestListService.requests;
    this.router.navigate(['/']);
  }

}
