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
      nama: "Rehulina Simamora,B.A",
      jabatan: "Kepala Sekolah",
      agama: "Kristen",
      tgllahir: "27-11-1975",
      jurusan: "Public Relation",
      gaji: "2.000.000",
    },
    {
      nama: "Juniarti Gultom",
      jabatan: "Administrator",
      agama: "Kristen",
      tgllahir: "14-06-1979",
      jurusan: "D3 Keuangan",
      gaji: "750.000",
    },
    {
      nama: "Anita Larasati Sitompul,S.Pd",
      jabatan: "Guru Kelas",
      agama: "Kristen",
      tgllahir: "16-03-1992",
      jurusan: "Pendidikan Bahasa Inggris",
      gaji: "800.000",
    },
    {
      nama: "Kristina br Padang,S.Pd",
      jabatan: "Guru Kelas",
      agama: "Kristen",
      tgllahir: "13-04-1998",
      jurusan: "Pendidikan Bahasa Inggris",
      gaji: "700.000",
    },
    {
      nama: "Juniart Simamora,S.Pd",
      jabatan: "Guru Kelas",
      agama: "Kristen",
      tgllahir: "20-02-1994",
      jurusan: "Pendidikan Bahasa Indonesia",
      gaji: "800.000",
    },
    {
      nama: "Cahaya Ulina,S.Pd",
      jabatan: "Guru Kelas",
      agama: "Kristen",
      tgllahir: "22-11-1996",
      jurusan: "PGSD",
      gaji: "800.000",
    },
    {
      nama: "Desti Simare-mare,S.Pd",
      jabatan: "Guru Kelas",
      agama: "Kristen",
      tgllahir: "07-12-1990",
      jurusan: "Pendidikan Bahasa Indonesia",
      gaji: "800.000",
    },
    {
      nama: "Siti Khairiyah",
      jabatan: "Guru Kelas",
      agama: "Islam",
      tgllahir: "12-11-1995",
      jurusan: "Sarjana Ekonomi",
      gaji: "700.000",
    },
    {
      nama: "Yohannes Exaudi Saragih",
      jabatan: "Guru Agama Kristen",
      agama: "Kristen",
      tgllahir: "24-07-1996",
      jurusan: "Pendidikan Agama Kristen",
      gaji: "500.000",
    },
    {
      nama: "Sri Masdah,S.Pd I",
      jabatan: "Guru Agama Islam",
      agama: "Kristen",
      tgllahir: "09-08-1984",
      jurusan: "Pendidikan Agama Islam",
      gaji: "500.000",
    },
    {
      nama: "Desi Koko Adelina Simatupang,M.Pd",
      jabatan: "Guru B.inggris",
      agama: "Kristen",
      tgllahir: "07-12-1990",
      jurusan: "Pendidikan Pendidikan Bahasa Inggris",
      gaji: "500.000",
    },
    {
      nama: "Niko Apriedo Sembiring,S.Pd",
      jabatan: "Guru Penjas",
      agama: "Kristen",
      tgllahir: "19-04-1989",
      jurusan: "Penjas",
      gaji: "500.000",
    },
    {
      nama: "Jaguar Ginting",
      jabatan: "Guru Pramuka",
      agama: "Kristen",
      tgllahir: "11-12-1997",
      jurusan: "Pramuka",
      gaji: "500.000",
    },
    {
      nama: "Neneng Syafrida,S.Pd",
      jabatan: "Guru Kelas",
      agama: "Islam",
      tgllahir: "15-06-1999",
      jurusan: "Guru IPA",
      gaji: "800.000",
    },
    {
      nama: "Tika Eumike Sitepu",
      jabatan: "Guru Kelas",
      agama: "Kristen",
      tgllahir: "13-05-2020",
      jurusan: "Guru IPS",
      gaji: "800.000",
    },
  ];

  return (
    <div style={{ flex: 2, alignSelf: "flex-start" }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Lengkap</TableCell>

              <TableCell align="right">Jabatan</TableCell>
              <TableCell align="right">Agama</TableCell>
              <TableCell align="right">Jurusan Mengajar</TableCell>
              <TableCell align="right">Gaji Pokok</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataGuru.map((data, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {data.namaGuru}
                </TableCell>
                <TableCell align="right">{data.jabatan}</TableCell>
                <TableCell align="right">{data.agama}</TableCell>
                <TableCell align="right">{data.jurusan}</TableCell>
                <TableCell align="right">{data.gaji}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TbCard;
