import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./InputJadwal.css";
import db from "../../firebase";

const InputMapel = () => {
  const [mapel, setMapel] = useState("");
  const saveData = () => {
    db.collection("mataPelajaran").add({
      MataPelajaran: mapel,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        order: 1,
      }}
    >
      <TextField
        value={mapel}
        onChange={(e) => setMapel(e.target.value)}
        id="outlined-basic"
        label="Nama Mata Pelajaran"
        variant="standard"
        color="success"
      />
      <Button variant="contained" color="secondary" onClick={saveData}>
        Buat Mapel
      </Button>
    </div>
  );
};

export default InputMapel;
