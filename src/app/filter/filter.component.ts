import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selDepartment: string;
  selCategory: string;
  selSubCategory: string;
  selStatus: string;
  selType: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCancel(){

  }

  onFilterSubmit(filterForm: NgForm){
      this.selDepartment = filterForm.value.department;
      this.selCategory = filterForm.value.category;
      this.selSubCategory = filterForm.value.subCategory;
      this.selStatus = filterForm.value.status;
      this.selType = filterForm.value.type;
      console.log(this.selDepartment + ', ' + this.selCategory + ', ' + this.selSubCategory + ', ' +this.selStatus + ', '+this.selType);
  }

}
