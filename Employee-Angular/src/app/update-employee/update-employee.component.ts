import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee:any={
    id:0,
    firstName:"",
    lastName:"",
    emailId:"",
  };
    
  constructor(private service:EmployeeService,private route:ActivatedRoute,
    private router:Router) {

  }
  ngOnInit(): void {
    this.employee.id = this.route.snapshot.params['id'] ; 
    this.service.getempbyiddata(this.employee.id).subscribe((data)=>{
      this.employee = data;
    })
  }
       

  onsubmit(){
    this.service.updateemployeedata(this.employee).subscribe((response:any)=>{
      this.gotoemployeelist();
    });
  }
  gotoemployeelist(){
    this.router.navigate(['/employees']);
 }
} 
   
