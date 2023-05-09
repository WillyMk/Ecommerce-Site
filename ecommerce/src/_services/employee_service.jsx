import axios from 'axios'
const Employee = "http://localhost:8081/api/employee";

    const saveEmployee = (employee) => {
        return axios.post(Employee, employee);
    }

    const getEmployees = () => {
        return axios.get(Employee);
    }

export const employeeService = {
    saveEmployee, getEmployees
};