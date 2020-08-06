import { Component, OnInit } from '@angular/core';
import { RequestDataService } from './data/data.service';
import { RequestDataStore } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private requestDataService: RequestDataService){}

  ngOnInit(){
     this.requestDataService.getRequests();
  }

}
