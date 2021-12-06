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

import { TrackChangesRounded } from "@material-ui/icons";

const TableDataLama = () => {
  const [hasil, setHasil] = useState([]);
  const [tahun, setTahun] = useState([]);

  useEffect(() => {
    db.collection("guru").onSnapshot((snapshot) => {
      setHasil(snapshot.docs.map((doc) => doc.data()));
    });
    db.collection("tahunAjaran").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setTahun(data[0]);
    });
  }, []);

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
        Data Rekap Laporan Absensi Guru SD Swasta Melbourne Tahun Ajaran
        2019/2020
      </h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nama Guru</TableCell>
              <TableCell align="center">Status Kehadiran</TableCell>
              <TableCell align="center">Kelas</TableCell>
              <TableCell align="center">Hari</TableCell>
              <TableCell align="center">Jam</TableCell>
              <TableCell align="center">Mapel Dibawakan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hasil.map((data, i) => {
              if (data.tahun === tahun.tahunajarn) {
                return (
                  <TableRow key={i}>
                    <TableCell align="center" component="th" scope="row">
                      {data.name}
                    </TableCell>
                    <TableCell align="center">{data.status}</TableCell>
                    <TableCell align="center">{data.kelas}</TableCell>
                    <TableCell align="center">{data.hari}</TableCell>
                    <TableCell align="center">{data.jam}</TableCell>
                    <TableCell align="center">{data.mapelDibawakan}</TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableDataLama;
