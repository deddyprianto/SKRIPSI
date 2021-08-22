import React, { useState } from "react";
import "./LaporanScreen.css";
import MainLaporan from "./MainLaporan";
import SideBarLaporan from "./SideBarLaporan";
import useWindowSize from "../../CustomHook/useWindowSize";

const LaporanScreen = (e) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <div className="container-Laporan">
      {width >= 800 && (
        <div className="SideBarLaporan">
          <SideBarLaporan />
        </div>
      )}
      <div className="MainLaporan">
        <MainLaporan />
      </div>
    </div>
  );
};

export default LaporanScreen;
