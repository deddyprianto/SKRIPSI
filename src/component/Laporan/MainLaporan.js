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
import TableJadwal from "../DataLaporan/TableJadwal";
import TableMapel from "../DataLaporan/TableMapel";
import TbSuratSakit from "./TbSuratSakit";
import InputJadwal from "../DataLaporan/InputJadwal";
import InputMapel from "../DataLaporan/InputMapel";
import TablePerTahunAjaran from "../DataLaporan/TablePerTahunAjaran";
import TableDataLama from "../DataLaporan/TableDataLama";
import InputTahunAjaran from "../DataLaporan/InputTahunAjaran";

const MainLaporan = () => {
  const [{ login }, dispatch] = stateValueProvider();
  const { user } = login;
  const [{ snackBar }] = stateValueProvider();

  const handleClose = (e) => {
    dispatch({ type: STATE_SNACKBAR, payload: false });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Dasboard Guru SD Swasta Melbourne
      </h2>
      <Divider />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TableJadwal />
        <InputJadwal />
      </div>
      <Divider />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TableMapel />
        <InputMapel />
      </div>
      <Divider light={true} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <InputTahunAjaran />
        <TablePerTahunAjaran />
      </div>
      <TbSuratSakit />
      <Divider />
      <TableData />
      <HasilkanPDF />
      <TableDataLama />
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
