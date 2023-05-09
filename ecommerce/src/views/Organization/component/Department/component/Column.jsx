import React from "react";
import { Link } from "react-router-dom";
import { Tag, Button } from "antd";

export const departmentColumns = [
  {
    title: "Department Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Department Name",
    dataIndex: "departmentName",
    key: "departmentName",
  },
  {
    title: "Department Code",
    dataIndex: "departmentCode",
    key: "departmentCode",
  },
  {
    title: "Department Description",
    dataIndex: "departmentDescription",
    key: "departmentDescription",
  },
];
