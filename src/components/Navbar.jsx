import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    key: "sub1",
    label: "Users",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "Users",
        type: "group",
        children: [
          {
            key: "1",
            label: <Link to={'/'}>All Users</Link>,
          },
          {
            key: "2",
            label: <Link to={'/add'}>Add User</Link>,
          },
        ],
      },
    ],
  },
];
const Navbar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      className="col-span-2 h-screen"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
};
export default Navbar;
