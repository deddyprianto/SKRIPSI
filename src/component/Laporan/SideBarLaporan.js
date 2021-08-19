import { Avatar, Divider } from "@material-ui/core";
import React from "react";
import { stateValueProvider } from "../../StateProvider";
import "./LaporanScreen.css";

import MainLaporan from "./MainLaporan";
const SideBarLaporan = () => {
  const [{ login }, dispatch] = stateValueProvider();
  const { user } = login;
  return (
    <div className="container">
      <div className="header-Sidebar">
        <Avatar src={user?.photoURL} />
        <div className="content-text">
          <p style={{ fontSize: 25 }}>{user?.username}</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <Divider light={true} />
      <div className="options-Sidebar"></div>
    </div>
  );
};

export default SideBarLaporan;
