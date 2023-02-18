import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  id:number=0;
   firstName:string="";
   lastName:string="";
   emailId:string="";
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
   
  }
  addemployee(){
    let obj={
      id : this.id,
      firstName : this.firstName,
      lastName: this.lastName,
      emailId : this.emailId
    }
    this.service.addemployeedata(obj).subscribe((respo)=>{
         this.gotoemployeelist();
    })
  }
   gotoemployeelist(){
      this.router.navigate(['/employees']);
   }
 onSubmit(){
   this.addemployee();
   this.gotoemployeelist();
 }
}
