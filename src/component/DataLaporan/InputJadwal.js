import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import "./InputJadwal.css";
import db from "../../firebase";
import { stateValueProvider } from "../../StateProvider";

const InputJadwal = () => {
  const [{ nikGuru }, dispatch] = stateValueProvider();
  const [nama, setNama] = useState("");
  const [mapelRoster, setMapelRoster] = useState("");
  const [jam, setJam] = useState("");
  const [hari, setHari] = useState("");
  const [kelas, setKelas] = useState("");

  const saveData = () => {
    db.collection("Jadwal").add({
      namaGuru: nama,
      mataPelDibawakan: mapelRoster,
      jam: jam,
      hari: hari,
      kelas: kelas,
    });
    setNama("");
    setMapelRoster("");
    setJam("");
    setHari("");
    setKelas("");
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nama Guru</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Nama Guru"
          onChange={(e) => setNama(e.target.value)}
          value={nama}
        >
          {nikGuru.map((nama) => (
            <MenuItem value={nama.nama}>{nama.nama}</MenuItem>
          ))}
        </Select>
      </FormControl>
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
