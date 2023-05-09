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
  import { departmentService } from "../../../../../_services";
import TextArea from "antd/es/input/TextArea";
  
  const { Option } = Select;
  
  const AddDepartment = (props) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { token } = theme.useToken();
  
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
      departmentService
        .saveDepartment(values)
        .then((resp) => {
          message.success("Department saved successfully");
          goBack();
        })
        .catch((err) => {
          console.log(err);
        });
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
              <span>New Department</span>
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
              label="Department Name"
              name="departmentName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Code"
              name="departmentCode"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Description"
              name="departmentDescription"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea style={{ width: "100%" }} />
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
  
  export default AddDepartment;
  