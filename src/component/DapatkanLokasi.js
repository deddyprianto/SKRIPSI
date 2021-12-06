import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { stateValueProvider } from "../StateProvider";
import { MODAL_CAMERA_SCAN, MODAL_LOKASI } from "../const/stateCondition";

const DapatkanLokasi = ({ lat, long }) => {
  console.log(lat);
  console.log(long);
  const [{ tampilButtonPiket }, dispatch] = stateValueProvider();
  const lanjutKePengisianAbsen = () => {
    dispatch({ type: MODAL_LOKASI, payload: false });
    dispatch({ type: MODAL_CAMERA_SCAN, payload: true });
  };

  return (
    <div style={{ width: "100%" }}>
      {lat === 3.588096 && long === 98.6742784 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "green", fontWeight: "bold" }}>
            Berhasil Mendeteksi Lingkungan,Kamu Berada di lingkungan sekolah
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={lanjutKePengisianAbsen}
          >
            Lanjut Ke Pengisian Absensi
          </Button>
        </div>
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Maaf,Kamu Tidak Berada di lingkungan sekolah. Harap Coba lagi dan
          pastikan kamu berada di lingkungan sekolah
        </p>
      )}
    </div>
  );
};

export default DapatkanLokasi;
