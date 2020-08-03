import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {FilterService} from './filter.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private router: Router, private filterService: FilterService) { }

  ngOnInit(): void {
  }

  onCancel(){
      this.router.navigate(['/dashboard']);
  }

  onFilterSubmit(filterForm: NgForm){
    this.filterService.filterValues( filterForm.value.department,
      filterForm.value.category,
      filterForm.value.subCategory,
        filterForm.value.status,
      filterForm.value.type);

      this.router.navigate(['/']);
  }

}
