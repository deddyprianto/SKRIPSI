import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DonutLarge,PictureAsPdf } from "@material-ui/icons";
import "./ListDrawer.css";
const ListDrawer = () => {
  //   const useStyles = makeStyles({
  //     containerDrawer: {
  //       width: "100px",
  //       bacgkround: "#15202B",
  //     },
  //     listBulanan: {
  //       width: "100%",
  //       display: "flex",
  //       justifyContent:'center'
  //       alignItems: 'center'
  //     },
  //   });
  //   const classes = useStyles();
  return (
    <div className="container-Drawer">
      <div className="rekap">
        <DonutLarge />
        <p style={{ color: "gray" }}>Rekap Absensi Bulanan</p>
      </div>
      <div className="pdf">
        <PictureAsPdf />
        <p style={{ color: "gray" }}>Hasilkan File PDF</p>
      </div>
    </div>
  );
};

export default ListDrawer;
