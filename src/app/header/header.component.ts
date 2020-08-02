import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { RequestDataService } from '../data/data.service';

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
    this.router.navigate(['/dashboard']);
  }

  selectFilter(){
    this.isFilterSelected = !this.isFilterSelected;
  }

}
