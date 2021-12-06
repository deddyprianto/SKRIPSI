import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import db from "../../firebase";

const InputTahunAjaran = () => {
  const [tahun, setTahun] = useState("");

  const saveData = () => {
    db.collection("tahunAjaran").add({
      tahunajarn: tahun,
    });
    setTahun("");
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
        value={tahun}
        onChange={(e) => setTahun(e.target.value)}
        id="outlined-basic"
        label="Tahun Ajaran"
        variant="standard"
        color="success"
      />
      <Button variant="contained" color="secondary" onClick={saveData}>
        Kirim Data
      </Button>
    </div>
  );
};

export default InputTahunAjaran;
