package com.system.Employee.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.system.Employee.Dao.EmpDao;
import com.system.Employee.Model.Employee;

@Service
public class EmpService {

	@Autowired
	EmpDao dao ;
	
	public List<Employee> getEmployees() {
	List<Employee> al =	dao.getEmployees();
		return al ;
	}

	public String insertEmployee(Employee employee) {
		return dao.insertEmployee(employee);
		
	}

	public Employee getEmployeebyid(long id) {
	return dao.getEmployeebyid(id);
		
	}

	public void updateEmployee(Employee employee) {
		dao.updateEmployee(employee);
		
	}

	public void delEmployee(long id) {
		dao.delEmployee(id);
		
	}
}
