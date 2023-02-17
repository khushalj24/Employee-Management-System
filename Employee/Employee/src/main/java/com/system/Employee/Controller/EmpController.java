package com.system.Employee.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.system.Employee.Model.Employee;
import com.system.Employee.Service.EmpService;
@CrossOrigin
@RestController
@RequestMapping("Employee")
public class EmpController {

	@Autowired
	EmpService ser ;
	
	@GetMapping("getEmployees")
	public List<Employee> getEmployees() {
		List<Employee> al =	ser.getEmployees();
			return al ;
		}
	
	@PostMapping("addEmployee")
	public String insertEmployee(@RequestBody Employee employee) {
		return ser.insertEmployee(employee);
	}
	
	@GetMapping("getempbyid/{id}")
	 public Employee getEmployeebyid(@PathVariable long id) {
	   Employee employee = ser.getEmployeebyid(id);
	   return employee ;
	}
	
	@PutMapping("updateEmployee")
	public void updateEmployee(@RequestBody Employee employee){
		 ser.updateEmployee(employee);
	}
	
	@DeleteMapping("delEmployee/{id}")
	public void delEmployee(@PathVariable long id) {
		  ser.delEmployee(id);
	}
	
}
