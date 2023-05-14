import React, { useState, useEffect, useCallback } from "react";
import { employeeService } from "../../../../../_services";
import { Button, Card, Row, Col, Table, message } from "antd";
import { employeeColumns } from "./Column";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const start_page = { page: 1, pageSize: 10 };
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(start_page);
  const [total_elements, setTotalElements] = useState(10);
  const [searchParams, setSearchParams] = useState(page);

  const navigate = useNavigate();

  const columns = [
    ...employeeColumns,
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      align: "center",
      width: '10%',
      render: (text, row) => (
        <button class="Btn">Edit 
        <svg class="svg" viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
      </button>
  
  
      ),
    },
  ];

  useEffect(() => {
    fetchEmployees(searchParams);
  }, [searchParams]);

  const fetchEmployees = () => {
    employeeService
      .getEmployees(searchParams)
      .then((resp) => {
        setEmployees(resp?.data?.content || []);
        setTotalElements(resp?.data?.totalElements || 0);
      })
      .catch((err) => {
        message.error("Could not fetch")
        console.log(err);
      });
  }

  const handleEdit = (row) => {
    console.log("Rpw data changed \t", row);
  };
  const handleAdd = (row) => {
    localStorage.setItem("access_token", true)
  };
  const handleRemove = (row) => {
    console.log("Rpw data changed \t", row);
  };

  const handleTableChange = (data) => {
    let current_page = { page: data.current, pageSize: data.pageSize };
    let params = {
      ...searchParams,
      ...current_page,
    };

    setSearchParams(params);
    setPage(current_page);
  };
  return (
    <div>
      <Card
      title={"Employees"}
      extra={
        <>
        <button
              className="button"
              onClick={() => {
                navigate("/organisation/employees/add", { state: { isAddNew: true } });
              }}
            >
              <div className="button-overlay"></div>
              <span>New Employee</span>
            </button>
        </>
      }>
          <Table
          loading={loading}
          pagination={{
              page: page.page,
              pageSize: page.pageSize,
              total: total_elements
          }}
          onChange={handleTableChange}
          size="small"
            bordered
            dataSource={employees}
            columns={columns}
            rowKey={(record) => record.id}
          />
      </Card>
    </div>
  );
};

export default Employee;
