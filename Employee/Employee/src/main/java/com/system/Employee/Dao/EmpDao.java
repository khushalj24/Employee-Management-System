package com.system.Employee.Dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.system.Employee.Model.Employee;

@Repository
public class EmpDao {

	@Autowired
	SessionFactory sf ;
	
public List<Employee> getEmployees() {
	Session session = sf.openSession();
	Criteria criteria = session.createCriteria(Employee.class);
	List<Employee> al = criteria.list();
	session.close();
	 return al ;
}

public String insertEmployee(Employee employee) {
	Session session = sf.openSession();
	Transaction tr = session.beginTransaction();
	session.save(employee);
	tr.commit();
	session.close();
	return "Data inserted successfully" ;
}

public Employee getEmployeebyid(long id) {
	Session session = sf.openSession();
	Employee employee = session.get(Employee.class, id);
	session.close();
	return employee ;
	
}

public void updateEmployee(Employee employee) {
	Session session = sf.openSession();
	Transaction tr = session.beginTransaction();
	session.update(employee);
	tr.commit();
	session.close();
	
}

public void delEmployee(long id) {
	Session session = sf.openSession();
	Transaction tr = session.beginTransaction();
    Employee employee = session.get(Employee.class, id);
    session.delete(employee);
	tr.commit();
	session.close();
	
}
	
}
