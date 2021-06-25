import React from "react";
import { stateValueProvider } from "../../StateProvider";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./LaporanScreen.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Drawer from "@material-ui/core/Drawer";
import useWindowSize from "../../CustomHook/useWindowSize";
const LaporanScreen = () => {
  const [{ login }, dispatch] = stateValueProvider();
  const { user } = login;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    table: {
      minWidth: 650,
    },
  }));
  const classes = useStyles();
  return (
    <div className="container__Laporan">
      <div className="sidebar__Laporan">
        <div className="containerItem__Laporan">
          <Avatar alt="user" src={user.photoURL} className={classes.large} />
          <div className="item__laporan">
            <h2>Haloo, {user.displayName}</h2>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>
      <div className="main__Laporan">
        <h2>STATUS KEHADIRAN GURU SD SWASTA MELBOURNE</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nama Guru SD Swasta MelBourne</TableCell>
                <TableCell align="right">Hadir</TableCell>
                <TableCell align="right">Sakit</TableCell>
                <TableCell align="right">Izin</TableCell>
                <TableCell align="right">Alpha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Deddy Prianto
                </TableCell>
                <TableCell align="right">Hadir</TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">-</TableCell>
                <TableCell align="right">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default LaporanScreen;
