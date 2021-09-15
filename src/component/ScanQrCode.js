require("file-loader?name=[name].[ext]!../../node_modules/qr-scanner/qr-scanner-worker.min.js");
import React, { useEffect, useState, useRef } from "react";
import QrScanner from "qr-scanner";
import codescanner from "../img/codescanner.png";
import "./ScanQrCode.css";
import Aos from "aos";
import { db } from "../firebase";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ModalValue from "./ModalValue";
import { stateValueProvider } from "../StateProvider";
import {
  STATE_MODAL,
  STATE_NAME,
  STATE_SAKIT,
  STATE_MODAL_LOCATION,
} from "../const/stateCondition";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Location from "./Location";

function ScanQrCode() {
  const [{ modal, modalLocation ,lokasiSekarang}, dispatch] = stateValueProvider();
  const [resscancamera, setResscancamera] = useState("");
  const [value, setValue] = useState("Status");
  const [hadir, setHadir] = useState(false);
  const [sakit, setSakit] = useState(false);
  const [izin, setIzin] = useState(false);
  const [alpha, setAlpha] = useState(false);
  const [buttonSakit, setButtonSakit] = useState(true);
  const [location, setLocation] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: "2000",
    });
  }, []);
  const play = (e) => {
    e.preventDefault();
    alert(
      "Terimakasih, tombol ini di berguna untuk menjaga aplikasi agar akurat dalam pemindaian data dari Qrcode"
    );
    const dataImg = document.getElementById("img");
    dataImg.addEventListener("change", () => {
      const fileImg = dataImg.files[0];
      if (!fileImg) {
        return;
      }
      QrScanner.scanImage(fileImg)
        .then((res) => {
          setResscancamera(res);
          dispatch({ type: STATE_NAME, payload: res });
        })
        .catch((err) => console.log(`ini err kamu => `, err));
    });
  };
  const saveData = (e) => {
    // e.preventDefault();
    // const checkData = db.collection("dataabsen").doc().set(
    //   {
    //     nama: resscancamera,
    //     status: value,
    //   },
    //   { merge: true }
    // );
    // if (checkData) {
    //   return alert("kamu berhasil di absensi");
    // }
    alert("Selamat Anda Berhasil DIABSEN");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "Hadir") {
      dispatch({ type: STATE_MODAL_LOCATION, payload: true });
      setHadir(true);
      setSakit(false);
      setIzin(false);
      setAlpha(false);
    }
    if (event.target.value === "Sakit") {
      dispatch({ type: STATE_SAKIT, payload: event.target.value });
      dispatch({ type: STATE_MODAL, payload: true });
      setButtonSakit(false);
      setHadir(false);
      setIzin(false);
      setAlpha(false);
    }
    if (event.target.value === "Izin") {
      setHadir(false);
      setSakit(false);
      setIzin(true);
      setAlpha(false);
    }
    if (event.target.value === "Alpha") {
      setHadir(false);
      setSakit(false);
      setIzin(false);
      setAlpha(true);
    }
  };
  const getLocation = () => setLocation(true);

  return (
    <div className="container__ScanQrCode">
      <div className="scanQrCode">
        <div className="content__qrcode">
          <h1 data-aos="zoom-in">Scan QRCode anda di sini</h1>
          <img
            data-aos-delay="1000"
            data-aos="zoom-out-up"
            src={codescanner}
            alt=""
          />

          <button
            data-aos-delay="2000"
            data-aos="zoom-out"
            className="btn__scan"
            onClick={play}
          >
            Please,Press THIS button before starting
          </button>

          <input
            data-aos-delay="2000"
            data-aos="zoom-out"
            type="file"
            id="img"
            placeholder="Upload QRCODE"
            style={{ color: "white", marginBottom: 50 }}
          />
          <div
            className="card_custom"
            data-aos="fade-down"
            data-aos-delay="3000"
          >
            <div className="content__hasil">
              {resscancamera && (
                <div>
                  <h3
                    style={{
                      color: "#374554",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    QR Code Scan Results
                  </h3>
                  <hr />
                  <p style={{ fontWeight: "bold" }}>{resscancamera}</p>
                </div>
              )}
              <FormControl
                component="fieldset"
                color="secondary"
                className="form_margin"
              >
                <FormLabel component="legend" style={{ color: "#696969" }}>
                  Attendance Status
                </FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value}>
                  <FormControlLabel
                    control={
                      <Radio
                        color="primary"
                        value="Hadir"
                        onChange={handleChange}
                        checked={hadir}
                      />
                    }
                    label="Hadir"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        color="secondary"
                        color="primary"
                        value="Sakit"
                        onChange={handleChange}
                        checked={sakit}
                      />
                    }
                    label="Sakit"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        color="primary"
                        color="primary"
                        value="Izin"
                        onChange={handleChange}
                        checked={izin}
                      />
                    }
                    label="Izin"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        color="primary"
                        color="primary"
                        value="Alpha"
                        onChange={handleChange}
                        checked={alpha}
                      />
                    }
                    label="Alpha"
                  />
                </RadioGroup>
              </FormControl>
              {buttonSakit && (
                <Button variant="contained" onClick={saveData} color="primary">
                  Primary
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="svg__scanQrcode">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,96C384,85,480,107,576,122.7C672,139,768,149,864,160C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Dialog
        open={modal}
        onClose={() => dispatch({ type: STATE_MODAL, payload: false })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Upload Gambar Bukti anda sakit. bukti bisa berupa Surat Sakit dan
          surat Dokter yg sah
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ModalValue />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => dispatch({ type: STATE_MODAL, payload: false })}
            color="primary"
          >
            Kirim Data
          </Button>
        </DialogActions>
      </Dialog>

      {/* dialog lokasi */}
      <Dialog
        open={modalLocation}
        onClose={() => dispatch({ type: STATE_MODAL_LOCATION, payload: false })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Dapatkan Lokasi Anda</DialogTitle>
        <DialogContent>
          <Button onClick={getLocation} variant="contained" color="secondary">
            Cek Lokasi anda saat ini
          </Button>
          {location && <Location />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default ScanQrCode;
