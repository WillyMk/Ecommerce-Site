import {
  Card,
  Form,
  Input,
  message,
  Select,
  theme,
  Row,
  Col,
  Button,
} from "antd";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { departmentService, employeeService } from "../../../../../_services";

const { Option } = Select;

const AddEmployee = (props) => {
  const [department, setDepartment] = useState([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const fetchDepartments = useCallback(() => {
    setDepartment([]);
    departmentService
      .getDepartment({page: 1, pageSize: 10})
      .then((resp) => {
        setDepartment(resp?.data?.content || []);
      })
      .catch((err) => {
        message.error("Could not fetch");
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  const goBack = () => {
    navigate(-1);
  };

  const formStyle = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const onFinish = (values) => {
    employeeService
      .saveEmployee(values)
      .then((resp) => {
        message.success("Employee saved successfully");
        form.resetFields();
        goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDepartment = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Card
        title={
          <>
            <ArrowLeftOutlined
              onClick={() => goBack()}
              className="arrow-left"
              style={{
                fontSize: "1.15em",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />
            <span>New Employee</span>
          </>
        }
      >
        <Form
          layout="vertical"
          form={form}
          name="item-form"
          style={formStyle}
          onFinish={onFinish}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "First Name is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Department"
            name="departmentCode"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder={"Select department"}
              onChange={handleDepartment}
              showSearch
            >
              {department &&
                department.map((d) => (
                  <Option key={d.id} value={d.departmentCode}>
                    {d.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" danger onClick={goBack}>
                Cancel
              </Button>

              <Button
                // loading={isSaving}
                type="primary"
                style={{ marginLeft: 8 }}
                htmlType="submit"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default AddEmployee;
