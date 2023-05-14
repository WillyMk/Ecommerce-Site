import React, { useState, useEffect, useCallback } from "react";
import { departmentService } from "../../../../../_services";
import { Card, Table, Button, message, Row, Col } from "antd";
import { departmentColumns } from "./Column";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Department = () => {
  const [department, setDepartment] = useState([]);
  const [loading, setLoading] = useState(false);
  const start_page = { page: 1, pageSize: 10 };
  const [page, setPage] = useState(start_page);
  const [total_elements, setTotalElements] = useState(10);
  const [searchParams, setSearchParams] = useState(page);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartments(searchParams);
  }, [searchParams]);

  const fetchDepartments = () => {
    setLoading(true);
    setDepartment([]);
    departmentService
      .getDepartment(searchParams)
      .then((resp) => {
        setDepartment(resp?.data?.content || []);
        setTotalElements(resp?.data?.totalElements || 0);
        setLoading(false);
      })
      .catch((err) => {
        message.error("Could not fetch");
        console.log(err);
        setLoading(false);
      });
  }

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
        title={"Departments"}
        extra={
          <>
          <button
              className="button"
              onClick={() => {
                navigate("/organisation/departments/add", { state: { isAddNew: true } });
              }}
            >
              <div className="button-overlay"></div>
              <span>New Department</span>
            </button>
          </>
        }
      >
        <Table
          size="small"
          loading={loading}
          bordered
          dataSource={department}
          columns={deptColumns}
            pagination={{
                page: page.page,
                pageSize: page.pageSize,
                total: total_elements
            }}
            onChange={handleTableChange}  
          rowKey={(record) => record.id}
        />
      </Card>
    </div>
  );
};

export default Department;
