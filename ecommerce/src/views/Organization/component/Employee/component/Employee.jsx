import React, { useState, useEffect, useCallback } from "react";
import { employeeService } from "../../../../../_services";
import { Button, Card, Row, Col, Table, message } from "antd";
import { employeeColumns } from "./Column";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const columns = [
    ...employeeColumns,
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      align: "center",
      render: (text, row) => (
        <Button onClick={() => handleEdit(row)} style={{ color: "blue" }}>
          <AiFillEdit />
        </Button>
      ),
    },
  ];

  useEffect(() => {

  }, []);

  const fetchEmployees = useCallback(()=> {
    console.log("Mmmh")
    employeeService
      .getEmployees()
      .then((resp) => {
        setEmployees(resp?.data || []);
      })
      .catch((err) => {
        message.error("Could not fetch")
        console.log(err);
      });
  },[])

  useEffect(()=>{
    fetchEmployees();
  },[fetchEmployees])

  const handleEdit = (row) => {
    console.log("Rpw data changed \t", row);
  };
  const handleAdd = (row) => {
    localStorage.setItem("access_token", true)
  };
  const handleRemove = (row) => {
    console.log("Rpw data changed \t", row);
  };
  return (
    <div>
      <Card
      title={"Employees"}
      extra={
        <>
        <Button
          size="small"
          type="primary"
          onClick={() => {
            navigate("/organisation/employees/add", { state: { isAddNew: true } });
          }}
        >
          New Employee
        </Button>
        </>
      }>
          <Table
            //   key={tableKey}
            size="small"
            //   loading={loading}
            bordered
            dataSource={employees}
            columns={columns}
            //   onChange={handleTableChange}
            //   pagination={{ total: total_elements, current: page.page, pageSize: page.pageSize }}
            rowKey={(record) => record.id}
          />
      </Card>
    </div>
  );
};

export default Employee;
