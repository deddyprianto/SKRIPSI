import React from "react";
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
const HasilkanPDF = () => {
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
  });

  const MyDocument = () => (
    <Document>
      <Page>
        <View style={styles.backgroundJudulHalaman}>
          <Text style={styles.textJudul}>
            Laporan Data Guru SD SWASTA Melbourne
          </Text>
          <Text>Tanggal: 20 Maret 2021</Text>
        </View>
        <Table
          data={[
            {
              nama: "John",
              status: "Smith",
              gambar: "HADIR",
            },
          ]}
        >
          <TableHeader textAlign={"center"}>
            <TableCell weighting={0.4}>Nama Guru</TableCell>
            <TableCell weighting={0.4}>Tanggal Absensi</TableCell>
            <TableCell weighting={0.4}>Status Kehadiran</TableCell>
          </TableHeader>
          <TableBody textAlign={"center"}>
            <DataTableCell weighting={0.4} getContent={(r) => r.nama} />
            <DataTableCell weighting={0.4} getContent={(r) => r.status} />
            <DataTableCell weighting={0.4} getContent={(r) => r.gambar} />
          </TableBody>
        </Table>
        <View style={styles.tandaTangan}>
          <Text>20 Oktober 2021,</Text>
          <Text>Mengetahui, Kepala Sekolah SDS Melbourne</Text>
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
