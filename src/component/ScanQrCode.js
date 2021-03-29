require("file-loader?name=[name].[ext]!../../node_modules/qr-scanner/qr-scanner-worker.min.js");
import React, { useState } from "react";
import QrScanner from "qr-scanner";
function ScanQrCode() {
  const [resscancamera, setResscancamera] = useState("");
  const play = (e) => {
    e.preventDefault();
    console.log(`you press me`);
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
    <div className="deddy">
      <h1>welcome dunia tipu-tipu</h1>
      <input type="file" id="img" />
      <button onClick={play}>Press Me</button>
      <h1>Halo {resscancamera} kamu sudah di absen</h1>
    </div>
  );
}
export default ScanQrCode;
