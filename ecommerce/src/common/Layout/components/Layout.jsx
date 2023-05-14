import { useState } from "react";
import { SketchPicker } from "react-color";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Image, Modal, Tooltip } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { NavigationItems } from "../../../config/NavigationItems";
import "./assets/css/index.css";
import logo from "./assets/man.png";
const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;
// import PerfectScrollbar from "react-perfect-scrollbar";
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [color, setColor] = useState("#0a082a");
  const [visible, setVisible] = useState(false);
  const [openKeys, setOpenKeys] = useState(["/home"]);
  const navigate = useNavigate();
  // const colorValue = localStorage.getItem("theme");
  const colorValue = "#201a79";

  const handleShowProfileClick = () => {
    console.log("Show Profile clicked");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const handleModalCancel = () => {
    setVisible(false);
  };

  const handleColorChange = (color) => {
    if (color) {
      setColor(color.hex);
      localStorage.setItem("theme", color.hex);
    }
  };

  const handleSettingsClick = () => {
    Modal.confirm({
      title: "Change Theme",
      content: <SketchPicker color={color} onChange={handleColorChange} />,
      style: {
        position: "absolute",
        right: "20px",
        top: "50%",
        marginTop: "-45vh",
        height: "100vh",
        maxWidth: "unset",
        minWidth: "unset",
        width: "250px",
      },
      onOk: () => {
        return;
      },
    });
  };

  const handleOpenChange = (keys) => {
    if (keys.length > 1) {
      keys.shift();
    }
    setOpenKeys(keys);
  };

  return (
    <Layout
      style={{
        height: "100vh",
        background: ` ${colorValue} !important`,
      }}
    >
      <Sider
        style={{ background: ` ${colorValue}` }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="image-div">
          {!collapsed ? (
            <h1
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "15px"
              }}
            >
              Vile Technology
            </h1>
          ) : // <Image
          //   style={{
          //     width: 180,
          //     height: 80,
          //     backgroundColor: colorValue,
          //     borderRadius: 90
          //   }}
          //   preview={false}
          //   alt={"New Vile"}
          //   // src={logo}
          // />
          null}
        </div>

        <div>
          <Menu
            style={{
              color: "white",
              background: colorValue,
            }}
            defaultSelectedKeys={[useLocation().pathname]}
            openKeys={openKeys}
            mode="inline"
            items={NavigationItems}
            onOpenChange={handleOpenChange}
            onClick={(item) => navigate(item.key)}
          />
        </div>
        <div
          className="ant-layout-sider-trigger"
          style={{ background: "red" }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            display: "flex",
            justifyContent: "end",
            background: colorValue,
            height: "35px",
            position: "sticky",
            top: "0",
          }}
        >
          <div
            style={{
              width: "20%",
              color: "white",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            Welcome Admin
            <>
              <UserOutlined
                onClick={() => setVisible(true)}
                style={{ color: "white", fontSize: "15px" }}
              />
              <Modal
                title="Profile Management"
                open={visible}
                onCancel={handleModalCancel}
                footer={null}
                width={"20%"}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  marginTop: "-45vh",
                  height: "100vh",
                  maxWidth: "unset",
                  minWidth: "unset",
                }}
              >
                <Menu mode="inline">
                  <SubMenu
                    key="sub1"
                    icon={<UserOutlined />}
                    title="Manage Profile"
                  >
                    <Menu.Item key="1" onClick={handleShowProfileClick}>
                      Personal info
                    </Menu.Item>
                    <Menu.Item key="2" onClick={handleShowProfileClick}>
                      Data & personalization
                    </Menu.Item>
                    <Menu.Item key="3" onClick={handleShowProfileClick}>
                      Security
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item
                    key="13"
                    icon={<LogoutOutlined style={{ color: "red" }} />}
                    onClick={handleLogoutClick}
                  >
                    Sign out
                  </Menu.Item>
                </Menu>
              </Modal>
            </>
            <Tooltip title="Change system Theme">
              <SettingOutlined
                onClick={handleSettingsClick}
                style={{ color: "white", fontSize: "15px" }}
              />
            </Tooltip>
          </div>
        </Header>
        <Content
          style={{
            // padding: 16,
            overflow: "auto",
          }}
        >
          <div
            className={"outer-outlet"}
            style={{ backgroundColor: ` ${colorValue}` }}
          >
            <div
              className={"outlet"}
              style={{ borderRight: `10px solid ${colorValue}` }}
            >
              <Outlet />
            </div>
          </div>
        </Content>
        <Footer
          style={{
            // display: "none",
            textAlign: "center",
            position: "sticky",
            bottom: 0,
            width: "100%",
            backgroundColor: colorValue,
            height: "20px",
            lineHeight: "0px",
            color: "white",
          }}
        >
          New Vile ©2023 All rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
