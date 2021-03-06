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

const TableMapel = () => {
  const [hasil, setHasil] = useState([]);

  useEffect(() => {
    db.collection("mataPelajaran").onSnapshot((snapshot) => {
      setHasil(snapshot.docs.map((doc) => doc.data()));
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
        order: 2,
      }}
    >
      <h2 style={{ textAlign: "center", color: "gray" }}>
        Table Mata Pelajaran
      </h2>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Nama Mata Pelajaran</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hasil.map((data, i) => (
              <TableRow key={i}>
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="center">{data.MataPelajaran}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableMapel;
