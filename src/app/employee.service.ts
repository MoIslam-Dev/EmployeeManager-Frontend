import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee'; // Import the Employee interface

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employees'; // Replace with your actual backend API URL

  constructor(private httpClient: HttpClient) { }

  // Function to fetch a list of employees
  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  // Function to fetch a single employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Employee>(url);
  }

  // You can add more functions here, like createEmployee, updateEmployee, or deleteEmployee,
  // depending on your application's needs.

  addEmployee(employee: Employee): Observable<Employee> {
    // Ensure the 'id' property is set to 0 to indicate a new employee
    employee.id = 0;
    return this.httpClient.post<Employee>(this.baseUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.baseUrl}`;
    return this.httpClient.put<Employee>(url, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }
  
  
}
