import React from "react";
import { stateValueProvider } from "../../StateProvider";
import Avatar from "@material-ui/core/Avatar";
import useWindowSize from "../../CustomHook/useWindowSize";
import Snackbar from "@material-ui/core/Snackbar";
import { STATE_SNACKBAR } from "../../const/stateCondition";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Grid, Divider } from "@material-ui/core";
import SideBarLaporan from "./SideBarLaporan";
import "./LaporanScreen.css";
import TableData from "../DataLaporan/TableData";
import HasilkanPDF from "../DataLaporan/HasilkanPDF";
import TbCard from "./TbCard";

const MainLaporan = () => {
  const [{ login }, dispatch] = stateValueProvider();
  const { user } = login;
  const [{ snackBar }] = stateValueProvider();

  const handleClose = (e) => {
    dispatch({ type: STATE_SNACKBAR, payload: false });
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "gray",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        Dasboard Guru SD Swasta Melbourne
      </h2>
      <Divider />
      <TableData />
      <HasilkanPDF />
      <div className="main-Laporan-kedua">
        <h2 style={{ color: "gray" }}>Guru dan Pegawai SD SWASTA MelBourne</h2>
        <TbCard />
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`haloo ${user?.displayName}`}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <Close fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};
export default MainLaporan;
