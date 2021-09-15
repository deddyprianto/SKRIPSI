import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
const TbCard = () => {
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
  const dataGuru = [
    {
      namaGuru: "Musdalifah,S.Pd",
      status: "Sakit2",
      buktiSuratSakit:
        "https://www.99.co/blog/indonesia/wp-content/uploads/2021/05/Surat-Keterangan-Sakit2.jpg",
    },
    {
      namaGuru: "arman,S.Pd",
      status: "Sakit2",
      buktiSuratSakit:
        "https://www.99.co/blog/indonesia/wp-content/uploads/2021/05/Surat-Keterangan-Sakit2.jpg",
    },
    {
      namaGuru: "Juniarty Gultom,S.Pd",
      status: "Sakit2",
      buktiSuratSakit:
        "https://www.99.co/blog/indonesia/wp-content/uploads/2021/05/Surat-Keterangan-Sakit2.jpg",
    },
  ];

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Lengkap</TableCell>
              <TableCell align="right">Status Kehadiran</TableCell>
              <TableCell align="right">Bukti Sakit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataGuru.map((data, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {data.namaGuru}
                </TableCell>
                <TableCell align="right">{data.status}</TableCell>
                <TableCell align="right">
                  <img
                    src={data.buktiSuratSakit}
                    width={300}
                    height={200}
                    alt=""
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TbCard;