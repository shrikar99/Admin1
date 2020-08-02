import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onApply(){
        //logic here
  }

  onCancel(){
      // logic here
  }

}
