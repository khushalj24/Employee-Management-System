import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

 
  emp:any={
    id:0,
    firstName:"",
    lastName:"",
    emailId:"",
  };
    
  constructor(private route:ActivatedRoute,private service:EmployeeService) { 
  }

  ngOnInit(): void {
    this.emp.id = this.route.snapshot.params['id'] ; 
    this.service.getempbyiddata(this.emp.id).subscribe((data)=>{
      this.emp = data;
    })
  }

}
