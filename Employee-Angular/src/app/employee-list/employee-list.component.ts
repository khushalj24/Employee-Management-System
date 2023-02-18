import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private service:EmployeeService, private router: Router) { }
  employees:any=[];

 ngOnInit(): void {
   this.getEmployees();
 }
  getEmployees(){
    this.service.getEmployeesdata().subscribe((response)=>{
      this.employees=response;
    })
  }

  updateEmployee(id:number){
   this.router.navigate(['/update-employee',id]);
  }

  deleteEmployee(id:number){
    this.service.delEmployeedata(id).subscribe((data)=>{
      this.getEmployees();
    })
  }
  EmployeeDetails(id:number){
   this.router.navigate(['/employee-details',id]);
  }
}

