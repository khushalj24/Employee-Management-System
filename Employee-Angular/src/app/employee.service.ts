import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private http:HttpClient) { 
  }
 private url:string="http://localhost:8080/Employee/getEmployees";
  getEmployeesdata(){
  return (this.http.get(this.url));
  }

  private purl:string="http://localhost:8080/Employee/addEmployee";
   addemployeedata(obj:any){
    return (this.http.post(this.purl,obj));
}
private iurl:string="http://localhost:8080/Employee/getempbyid" ;
  getempbyiddata(id:number){
     return (this.http.get(`${this.iurl}/${id}`));
  }

  private upurl:string="http://localhost:8080/Employee/updateEmployee";
   updateemployeedata(obj:any){
    return (this.http.put(this.upurl,obj));
   }
  
   private delurl:string="http://localhost:8080/Employee/delEmployee";
    delEmployeedata(id:number){
      return (this.http.delete(`${this.delurl}/${id}`));
    }
}

