require("file-loader?name=[name].[ext]!../../node_modules/qr-scanner/qr-scanner-worker.min.js");
import React, { useEffect, useState } from "react";
import QrScanner from "qr-scanner";
import codescanner from "../img/codescanner.png";
import "./ScanQrCode.css";
import Aos from "aos";
function ScanQrCode() {
  const [resscancamera, setResscancamera] = useState("");
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
            <button className="scann__btn" onClick={play}>
              Start Scann
            </button>
            {resscancamera && <p>Halo {resscancamera} kamu sudah di absen</p>}
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
    </div>
  );
}
export default ScanQrCode;
