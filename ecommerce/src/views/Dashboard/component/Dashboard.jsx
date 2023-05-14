import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Row, Col, Tabs } from "antd";
import { Pie } from "@ant-design/plots";
import { employeeService } from "../../../_services";

const { TabPane } = Tabs;
const Dashboard = () => {
  const data = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return (
    <Tabs type="card">
      <TabPane tab="Employees">
        <Row>
          <Col span={12}>
            {" "}
            <Pie {...config} />
          </Col>
          <Col span={12}>
            {" "}
            <Pie {...config} />
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );
};

export default Dashboard;
