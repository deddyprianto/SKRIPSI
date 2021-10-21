import React, { useEffect, useState } from "react";
import "./MakeQrCode.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../img/code.png";
import qrtemplate from "../img/qrcodetemplate.png";
import QRCode from "qrcode";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

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
    setInputanqrcode("");
  };

  return (
    <div className="container__make">
      <div className="container__bg">
        <div className="textContent__make">
          <h1 data-aos="zoom-in">Make your QRCode in here</h1>
          <p data-aos-delay="1000" data-aos="zoom-out-up">
            Create your Complete QRCode here
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
        <h2 data-aos="fade-down" className="text__nama">
          Make your QRCode In Here
        </h2>
      </div>
      <Grid container xs={12} justify="center" alignItems="center">
        <img
          src={qrtemplate}
          className="img__qrcode"
          alt=""
          data-aos="fade-up"
        />
        <div className="content__qrcode" data-aos="fade-up">
          <div className="inputan">
            <TextField
              fullWidth
              id="standard-basic"
              onChange={(e) => setInputanqrcode(e.target.value)}
              value={inputanqrcode}
              label="Enter Teacher's name"
            />
          </div>
          <div className="btn__qrcode">
            <Button variant="contained" onClick={handelQrCode} color="primary">
              Make QRCode
            </Button>
          </div>
          {inputanqrcode.length > 10 ? (
            <div className="gambar__qrcodeRender">
              {showwarn && (
                <p className="text__pSpecial">
                  Click the image to download QrCODE
                </p>
              )}
              <a href={inputanqrcode} download>
                <img
                  src={inputanqrcode}
                  alt="it's right, click the button and create a qrcode now"
                />
              </a>
            </div>
          ) : (
            <p style={{ marginTop: "50px", textAlign: "center" }}>
              Hello, let's make things easy
            </p>
          )}
        </div>
      </Grid>
    </div>
  );
}

export default MakeQrCode;
