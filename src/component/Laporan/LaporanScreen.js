import React, { useState } from "react";
import "./LaporanScreen.css";
import MainLaporan from "./MainLaporan";
import SideBarLaporan from "./SideBarLaporan";
import useWindowSize from "../../CustomHook/useWindowSize";
import { Menu } from "@material-ui/icons";
import { Drawer } from "@material-ui/core";
import ListDrawer from "../ListDrawer";
const LaporanScreen = (e) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <>
      <div className="container-Laporan">
        {width <= 800 ? (
          <div className="sidebar-LaporanMini">
            <Menu onClick={toggleDrawer(true)} />
          </div>
        ) : (
          <div className="SideBarLaporan">
            <SideBarLaporan />
          </div>
        )}
        <div className="MainLaporan">
          <MainLaporan />
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ListDrawer />
      </Drawer>
    </>
  );
};

export default LaporanScreen;
