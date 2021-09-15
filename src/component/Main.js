import React, { useEffect, useRef } from "react";
import "./Main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import FilterCenterFocusIcon from "@material-ui/icons/FilterCenterFocus";
import FormatShapesIcon from "@material-ui/icons/FormatShapes";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { Button } from "@material-ui/core";

function Home() {
  const refInputTypeFile = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="containerInti__main">
      <div className="container__main">
        <div className="text__main">
          <h1 data-aos="fade-down">Welcome To App Scanner Using QRCODE </h1>
          <p data-aos-delay="1000" data-aos="fade-down">
            It's complicated to use manual attendance, let's use qrcode
            attendance to minimize the hassle
          </p>
        </div>
      </div>
      <div className="svg__main">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L60,101.3C120,139,240,213,360,224C480,235,600,181,720,144C840,107,960,85,1080,80C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="fitur">
        <h1 data-aos="fade-down">Fitur App Scanner QRCode</h1>

        <div className="card">
          <div className="card__fitur" data-aos="fade-down">
            <FilterCenterFocusIcon style={{ fontSize: 100 }} />
            <h3>Create your own QRCode</h3>
            <p style={{ color: "#9CA3AF" }}>
              The scanQrCode application has the feature of generating your own
              QRCode without having to create a QRCode using the services of a
              website or other party application
            </p>
          </div>
          <div className="card__fitur" data-aos="fade-down">
            <FormatShapesIcon style={{ fontSize: 100 }} />
            <h3>Scan QR Code Directly</h3>
            <p style={{ color: "#9CA3AF" }}>
              After creating a QRCode, you can directly scan the results of the
              qrcode that you made
            </p>
          </div>
          <div
            data-aos-delay="1000"
            className="card__fitur"
            data-aos="fade-down"
          >
            <HowToRegIcon style={{ fontSize: 100 }} />
            <h3>Accurate attendance results</h3>
            <p style={{ color: "#9CA3AF" }}>
              Without denying the system is a technology that is very rare with
              inaccuracy, everything that is produced is accurate and efficient
            </p>
          </div>
          <div
            className="card__fitur"
            data-aos-delay="1000"
            data-aos="fade-down"
          >
            <PictureAsPdfIcon style={{ fontSize: 100 }} />
            <h3>The output is a PDF file</h3>
            <p style={{ color: "#9CA3AF" }}>
              File PDF merupakan file yg sangat sering di gunakan oleh berbagai
              instansi/perusahaan bahkan sekolah dikarenakan file pdf yg sangat
              rapi dan ukuran file yg bisa di bilang kecil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
