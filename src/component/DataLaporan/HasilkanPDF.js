import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";
import DeleteIcon from "@material-ui/icons/Delete";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import db from "../../firebase";

const HasilkanPDF = () => {
  const [hasil, setHasil] = useState([]);
  useEffect(() => {
    db.collection("guru").onSnapshot((snapshot) => {
      setHasil(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  const styles = StyleSheet.create({
    textLinkPDF: {
      textDecoration: "none",
      fontFamily: "arial",
      color: "white",
    },
    backgroundJudulHalaman: {
      backgroundColor: "#15202B",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "15%",
      width: "100%",
    },
    textJudul: {
      textAlign: "center",
      marginBottom: 20,
      color: "white",
    },
    textTanggal: {
      color: "white",
    },
    tandaTangan: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      padding: 15,
      color: "gray",
      fontSize: 12,
    },
jarakTable:{
marginTop: 30}
  });
  const tanggal = new Date();
  const hari = tanggal.toLocaleString();
  const MyDocument = () => (
    <Document>
      <Page>
        <View style={styles.backgroundJudulHalaman}>
          <Text style={styles.textJudul}>
            Laporan Data Guru SD SWASTA Melbourne
          </Text>
          <Text style={styles.textJudul}>Tanggal: {hari}</Text>
        </View>
        <Table style={styles.jarakTable} data={hasil}>
          <TableHeader textAlign={"center"}>
            <TableCell weighting={0.4}>Nama Guru</TableCell>
            <TableCell weighting={0.4}>Jam Absensi</TableCell>
            <TableCell weighting={0.4}>Status Kehadiran</TableCell>
<TableCell weighting={0.4}>Piket</TableCell>
<TableCell weighting={0.4}>Tidak Piket</TableCell>
<TableCell weighting={0.4}>Tidak Guru Kelas</TableCell>
<TableCell weighting={0.4}>Mata Pelajaran</TableCell>
<TableCell weighting={0.4}>Jam Mulai</TableCell>
          </TableHeader>
          <TableBody textAlign={"center"}>
            <DataTableCell weighting={0.4} getContent={(r) => r.name} />
            <DataTableCell weighting={0.4} getContent={(r) => r.jam} />
            <DataTableCell weighting={0.4} getContent={(r) => r.status} />
            <DataTableCell weighting={0.4} getContent={(r) => r.piket} />
            <DataTableCell weighting={0.4} getContent={(r) => r.tidakpiket} />
            <DataTableCell
              weighting={0.4}
              getContent={(r) => r.tidakgurukelas}
            />
            <DataTableCell weighting={0.4} getContent={(r) => r.mapel} />
            <DataTableCell weighting={0.4} getContent={(r) => r.waktumulai} />
          </TableBody>
        </Table>
        <View style={styles.tandaTangan}>
          <Text>20 Oktober 2021,</Text>
          <Text>Mengetahui, Kepala Sekolah SDS Melbourne</Text>
          <Text>Rehulina Simamora,BA</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        textAlign: "center",
        marginBottom: 22,
      }}
    >
      <Button
        startIcon={<PictureAsPdfIcon />}
        variant="contained"
        color="secondary"
        style={{ marginTop: 30 }}
      >
        <PDFDownloadLink
          style={styles.textLinkPDF}
          document={<MyDocument />}
          fileName="laporan.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Cetak Laporan PDF!"
          }
        </PDFDownloadLink>
      </Button>
      <Button
        variant="contained"
        style={{ marginTop: 30 }}
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Hapus Data
      </Button>
    </div>
  );
};

export default HasilkanPDF;
