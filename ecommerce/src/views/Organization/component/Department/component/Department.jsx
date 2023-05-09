import React, { useState, useEffect, useCallback } from "react";
import { departmentService } from "../../../../../_services";
import { Card, Table, Button, message, Row, Col } from "antd";
import { departmentColumns } from "./Column";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Department = () => {
  const [department, setDepartment] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchDepartments = useCallback(() => {
    setLoading(true);
    setDepartment([]);
    departmentService
      .getDepartment()
      .then((resp) => {
        setDepartment(resp?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        message.error("Could not fetch");
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  const deptColumns = [
    ...departmentColumns,
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      width: "10%",
      render: (text, row) => (
        <Row gutter={[8, 8]}>
          <Col>
            <Button onClick={() => handleEdit(row)} style={{ color: "blue" }}>
              <AiFillEdit />
            </Button>
          </Col>
          <Col>
            <Button onClick={() => handleDelete(row)} style={{ color: "red" }}>
              <AiFillDelete />
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  const handleEdit = (row) => {
    console.log("Rpw data changed \t", row);
  };
  const handleDelete = (row) => {
    departmentService
      .deleteDepartment(row.id)
      .then((resp) => {
        message.success("Department deleted successfully");
        fetchDepartments();
      })
      .catch((err) => {
        console.log(err);
        message.error("Cannot delete department");
      });
  };
  return (
    <div>
      <Card
        title={"Departments"}
        extra={
          <Button
            size="small"
            type="primary"
            onClick={() => {
              navigate("/organisation/departments/add", {
                state: { isAddNew: true },
              });
            }}
          >
            New Department
          </Button>
        }
      >
        <Table
          size="small"
          loading={loading}
          bordered
          dataSource={department}
          columns={deptColumns}
          //   onChange={handleTableChange}
          //   pagination={{ total: total_elements, current: page.page, pageSize: page.pageSize }}
          rowKey={(record) => record.id}
        />
      </Card>
    </div>
  );
};

export default Department;
