import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./InputJadwal.css";
import db from "../../firebase";

const InputJadwal = () => {
  const [nik, setNik] = useState("");
  const [mapelRoster, setMapelRoster] = useState("");
  const [jam, setJam] = useState("");
  const [hari, setHari] = useState("");
  const [kelas, setKelas] = useState("");

  const saveData = () => {
    db.collection("Jadwal").add({
      nikGuru: nik,
      mataPelDibawakan: mapelRoster,
      jam: jam,
      hari: hari,
      kelas: kelas,
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
        id="outlined-basic"
        label="Nik Guru"
        variant="outlined"
        color="success"
        value={nik}
        onChange={(e) => setNik(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Mapel Roster"
        variant="outlined"
        color="success"
        value={mapelRoster}
        onChange={(e) => setMapelRoster(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Jam"
        variant="outlined"
        color="success"
        value={jam}
        onChange={(e) => setJam(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Hari"
        variant="outlined"
        color="success"
        value={hari}
        onChange={(e) => setHari(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Kelas"
        variant="outlined"
        color="success"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={saveData}>
        Buat Jadwal
      </Button>
    </div>
  );
};

export default InputJadwal;
