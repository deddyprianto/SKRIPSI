require("file-loader?name=[name].[ext]!../../node_modules/qr-scanner/qr-scanner-worker.min.js");
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import QrScanner from "qr-scanner";
import codescanner from "../img/codescanner.png";
import "./ScanQrCode.css";
import Aos from "aos";
import db from "../firebase";
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
  STATE_MODAL_PIKET,
  STATE_NAME,
  STATE_SAKIT,
  STATE_PIKET,
  STATE_MASUK_BIASA,
  STATE_BUKAN_GKELAS,
} from "../const/stateCondition";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ScheduleIcon from "@material-ui/icons/Schedule";
import {
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

function ScanQrCode() {
  const [
    { modal, modalLocation, modalPiket, piket, masukBiasa, bukanGKelas },
    dispatch,
  ] = stateValueProvider();
  const [resscancamera, setResscancamera] = useState("");
  const [value, setValue] = useState("Status");
  const [hadir, setHadir] = useState(false);
  const [sakit, setSakit] = useState(false);
  const [izin, setIzin] = useState(false);
  const [alpha, setAlpha] = useState(false);
  const [buttonSakit, setButtonSakit] = useState(true);
  const [pemberitahuanAbsen, setPemberitahuanAbsen] = useState(false);
  const [yapiket, setYapiket] = useState(false);
  const [tidakpiket, setTidakpiket] = useState(false);
  const [tidakgurukelas, setTidakgurukelas] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useLayoutEffect(() => {
    dispatch({ type: STATE_MODAL_PIKET, payload: true });
  }, []);
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
  const tanggal = new Date();
  const hari = tanggal.toLocaleString();
  const saveData = () => {
    const checkData = db.collection("dataabsen").add({
      name: resscancamera,
      jam: hari,
      status: value,
      piket: piket,
      tidakpiket: masukBiasa,
      tidakgurukelas: bukanGKelas,
    });
    if (checkData) {
      setPemberitahuanAbsen(true);
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "Hadir") {
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
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
  const classes = useStyles();

  return (
    <div className="container__ScanQrCode">
      <div className="scanQrCode">
        <div className="content__qrcode">
          <h1 data-aos="zoom-in">Scan QRCode anda di sini</h1>
          <Button
            onClick={() => {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  setLatitude(position.coords.latitude);
                  setLongitude(position.coords.longitude);
                },
                (error) => alert(error.message),
                { enableHighAccuracy: true, timeout: 5000 }
              );
            }}
          >
            Press Me To Get Location
          </Button>
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
          <h1>Ltitiude = {latitude}</h1>
          <h2>Longtiidude = {longitude}</h2>
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
            {resscancamera && (
              <div className="content__hasil">
                <h3
                  style={{
                    color: "#374554",
                    fontSize: 17,
                    textAlign: "center",
                  }}
                >
                  QR Code Scan Results
                </h3>
                <hr />
                <p style={{ fontWeight: "bold" }}>{resscancamera}</p>
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
                  <Button
                    variant="contained"
                    onClick={saveData}
                    color="primary"
                  >
                    Absen Sekarang
                  </Button>
                )}
              </div>
            )}
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
      {/* dialog alert absensi */}
      <Dialog
        open={pemberitahuanAbsen}
        onClose={() => setPemberitahuanAbsen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Selamat Anda berhasil di absen</DialogTitle>
        <DialogContent>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Detail Absensi Kamu
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemText primary="Nama" />
              <ListItemSecondaryAction>{resscancamera}</ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Status Kehadiran" />
              <ListItemSecondaryAction>{value}</ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Jam absen" />
              <ListItemSecondaryAction>{hari}</ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Piket" />
              <ListItemSecondaryAction>
                {piket === new Date().getHours().toString() ? (
                  <p style={{ color: "green" }}>Tepat Waktu</p>
                ) : (
                  <p style={{ color: "red" }}>Terlambat</p>
                )}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Masuk Biasa" />
              <ListItemSecondaryAction>
                {masukBiasa === new Date().getHours().toString() ? (
                  <p style={{ color: "green" }}>Tepat Waktu</p>
                ) : (
                  <p style={{ color: "red" }}>Terlambat</p>
                )}
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Tidak G.kelas" />
              <ListItemSecondaryAction>{bukanGKelas}</ListItemSecondaryAction>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPemberitahuanAbsen(false)} color="primary">
            Tutup
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={modalPiket}
        onClose={() => dispatch({ type: STATE_MODAL_PIKET, payload: false })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Apakah anda hari ini Piket</DialogTitle>
        <DialogContent>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Wajib Pilih salah satu
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={yapiket}
                  tabIndex={-1}
                  value="07:00"
                  disableRipple
                  onChange={(e) => {
                    dispatch({ type: STATE_MODAL_PIKET, payload: false });
                    setYapiket(true);
                    dispatch({ type: STATE_PIKET, payload: e.target.value });
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Ya, Piket" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <h2 style={{ color: "gray", fontSize: 13 }}>07:00 Wib</h2>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={tidakpiket}
                  tabIndex={-1}
                  disableRipple
                  value="07:15"
                  onChange={(e) => {
                    console.log(e.target.value);
                    dispatch({ type: STATE_MODAL_PIKET, payload: false });
                    setTidakpiket(true);
                    dispatch({
                      type: STATE_MASUK_BIASA,
                      payload: e.target.value,
                    });
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Tidak, Piket" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <h2 style={{ color: "gray", fontSize: 13 }}>07:15 Wib</h2>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={tidakgurukelas}
                  tabIndex={-1}
                  disableRipple
                  value="Saya Bukan Guru Kelas"
                  onChange={(e) => {
                    console.log(e.target.value);
                    dispatch({ type: STATE_MODAL_PIKET, payload: false });
                    dispatch({
                      type: STATE_BUKAN_GKELAS,
                      payload: e.target.value,
                    });
                    setTidakgurukelas(true);
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Saya Guru Lepas" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <ScheduleIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              dispatch({ type: STATE_MODAL_PIKET, payload: false })
            }
            color="primary"
          >
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ScanQrCode;
