import React, { useEffect, useState } from "react";
import "./MakeQrCode.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../img/code.png";
import qrtemplate from "../img/qrcodetemplate.png";
import QRCode from "qrcode";

function MakeQrCode() {
  const [inputanqrcode, setInputanqrcode] = useState("");
  const [showwarn, setShowwarn] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const handelQrCode = (e) => {
    e.preventDefault();
    QRCode.toDataURL(inputanqrcode)
      .then((res) => {
        setInputanqrcode(res);
        setShowwarn(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container__make">
      <div className="container__bg">
        <div className="textContent__make">
          <h1 data-aos="zoom-in">Make your QRCode in here</h1>
          <p data-aos-delay="1000" data-aos="zoom-out-up">
            Buat QRCode Lengkap anda di sini
          </p>
          <img
            data-aos-delay="2000"
            data-aos="zoom-out-up"
            className="img__make"
            src={image}
            alt="bacgkround-image"
          />
        </div>
      </div>
      <div className="svg__make">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,122.7C384,96,480,64,576,74.7C672,85,768,139,864,176C960,213,1056,235,1152,202.7C1248,171,1344,85,1392,42.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* make UI qr code */}
      <div className="text__judul">
        <h1 data-aos="fade-down">
          Buat Nama lengkap dan hasilkan Qr Code Pegawai anda Di sini
        </h1>
      </div>
      <div className="qrcode">
        {/* you must build a image component */}
        <img src={qrtemplate} alt="" data-aos="fade-up" />
        <div className="content__qrcode" data-aos="fade-up">
          <div className="inputan">
            <input
              type="text"
              placeholder="masukan nama guru dan hasil kan qrcode"
              onChange={(val) => setInputanqrcode(val.target.value)}
            />
          </div>
          <div className="btn__qrcode">
            <button onClick={handelQrCode} className="button__Makeqrcode">
              Buat Qrcode
            </button>
          </div>
          {inputanqrcode.length > 10 ? (
            <div className="gambar__qrcodeRender">
              {showwarn && (
                <p className="text__pSpecial">Klik gambar untuk mendownload</p>
              )}
              <a href={inputanqrcode} download>
                <img
                  src={inputanqrcode}
                  alt="sudah pas, klik tombol dan buat qrcode sekarang"
                />
              </a>
            </div>
          ) : (
            <p style={{ marginTop: "50px" }}>
              Masukkan nama karyawan yg lengkap
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MakeQrCode;
