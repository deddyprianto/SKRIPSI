import React, { useEffect, useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./TableData.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import db from "../../firebase";
import { stateValueProvider } from "../../StateProvider";
const TableData = () => {
  const [hasil, setHasil] = useState([]);
  useEffect(() => {
    db.collection("guru").onSnapshot((snapshot) => {
      setHasil(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  const [{ kelas, hari, jam, mapelDibawakan }, dispatch] = stateValueProvider();
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
        marginTop: 20,
        marginBottom: 20,
        width: "85%",
      }}
    >
      <h2 style={{ textAlign: "center", color: "gray" }}>
        Data Rekap Laporan Absensi Guru SD Swasta Melbourne
      </h2>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nama Guru</TableCell>
              <TableCell align="right">Status Kehadiran</TableCell>
              <TableCell align="right">Kelas</TableCell>
              <TableCell align="right">Hari</TableCell>
              <TableCell align="right">Jam</TableCell>
              <TableCell align="right">Mapel Dibawakan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hasil.map((data, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell align="right">{data.status}</TableCell>
                <TableCell align="right">{kelas}</TableCell>
                <TableCell align="right">{hari}</TableCell>
                <TableCell align="right">{jam}</TableCell>
                <TableCell align="right">{mapelDibawakan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
