import axios from "axios";
const DEPT = "http://localhost:8080/api/department";

const saveDepartment = (employee) => {
  return axios.post(DEPT, employee);
};

const getDepartment = (params) => {
  return axios.get(DEPT, {params});
};

const deleteDepartment = (id) => {
  return axios.delete(`${DEPT}/${id}`);
}

export const departmentService = {
  saveDepartment,
  getDepartment,
  deleteDepartment
};
