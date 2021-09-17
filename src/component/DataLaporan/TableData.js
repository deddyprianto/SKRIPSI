import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./TableData.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const TableData = () => {
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
      margin: 10,
    },
  }));
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", color: "gray" }}>
        Data Laporan Absensi Guru SD Swasta Melbourne
      </h2>

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
  );
};

export default TableData;
