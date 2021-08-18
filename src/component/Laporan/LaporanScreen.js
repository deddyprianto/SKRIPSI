import React from "react";
import { stateValueProvider } from "../../StateProvider";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Drawer from "@material-ui/core/Drawer";
import useWindowSize from "../../CustomHook/useWindowSize";
import Snackbar from "@material-ui/core/Snackbar";
import { STATE_SNACKBAR } from "../../const/stateCondition";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
const LaporanScreen = () => {
  const [{ login }, dispatch] = stateValueProvider();
  const { user } = login;
  const [{ snackBar }] = stateValueProvider();
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
  const handleClose = (e) => {
    dispatch({ type: STATE_SNACKBAR, payload: false });
  };

  return (
    <div className="container__Laporan">
      {/* sidebar */}
      <div className="sidebar__Laporan">
        <div className="containerItem__Laporan">
          <Avatar alt="user" src={user.photoURL} className={classes.large} />
          <div className="item__laporan">
            <h2 style={{ fontFamily: "sans-serif" }}>
              Haloo, {user?.displayName}
            </h2>
            <p>Email: {user?.email}</p>
          </div>
        </div>
        {/* isi sidebar */}
        <div>
          <p>Status Kehadiran</p>
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
    </div>
  );
};

export default LaporanScreen;
