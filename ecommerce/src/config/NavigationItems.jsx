import {
    SettingFilled,
    UserOutlined,
    KeyOutlined,
    PieChartOutlined,
  } from "@ant-design/icons";
  import { AiOutlineLineChart } from "react-icons/ai";
  import { FcUnlock } from "react-icons/fc";
  
  export const NavigationItems = [
    {
      label: "Dashboard",
      icon: <PieChartOutlined />,
      key: "/dashboard",
    },
    {
      label: "Organisation",
      icon: <KeyOutlined />,
      color: "white",
      key: "/organisation",
      children: [
        {
          label: "Employees",
          icon: <UserOutlined />,
          key: "/organisation/employees",
        },
        {
          label: "Department",
          icon: <SettingFilled />,
          key: "/organisation/departments",
        },
      ],
    },
  ];
  