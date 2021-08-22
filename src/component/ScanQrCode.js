require("file-loader?name=[name].[ext]!../../node_modules/qr-scanner/qr-scanner-worker.min.js");
import React, { useEffect, useState } from "react";
import QrScanner from "qr-scanner";
import codescanner from "../img/codescanner.png";
import "./ScanQrCode.css";
import Aos from "aos";
import { db } from "../firebase";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Modal from "@material-ui/core/Modal";

function ScanQrCode() {
  const [resscancamera, setResscancamera] = useState("");
  const [value, setValue] = useState("Hadir");
  const [hadir, setHadir] = useState(false);
  const [sakit, setSakit] = useState(false);
  const [izin, setIzin] = useState(false);
  const [alpha, setAlpha] = useState(false);
  const [modal, setModal] = useState(false);
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
        .then((res) => setResscancamera(res))
        .catch((err) => console.log(`ini err kamu => `, err));
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    // const checkData = db.collection("dataabsen").doc().set(
    //   {
    //     nama: resscancamera,
    //     status: value,
    //   },
    //   { merge: true }
    // );
    if (checkData) {
      return alert("kamu berhasil di absensi");
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "Sakit") {
      setModal(true);
    }
  };
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
            Please,Tekan tombol INI sebelum memulai
          </button>

          <div
            className="content__hasil"
            data-aos="fade-down"
            data-aos-delay="3000"
          >
            <input type="file" id="img" />
            {resscancamera && <p>Halo {resscancamera}</p>}

            <FormControl component="fieldset" color="secondary">
              <FormLabel component="legend" style={{ color: "white" }}>
                Status Kehadiran
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
            <button className="scann__btn" onClick={saveData}>
              ABSEN SEKARANG !
            </button>
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
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {/* isi modal */}
      </Modal>
    </div>
  );
}
export default ScanQrCode;
