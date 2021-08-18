import React, { useEffect, useRef } from "react";
import "./Main.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  const refInputTypeFile = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="containerInti__main">
      <div className="container__main">
        <div className="text__main">
          <h1 data-aos="fade-down">Welcome To App Scanner Using QR CODE </h1>
          <p data-aos-delay="1000" data-aos="fade-down">
            Ribet menggunakan absensi manual, yuk pake absensi qrcode untuk
            meminimize keribetan
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
            <h3>kaya manfaat</h3>
            <p>kaya akan manfaat dan bagus untuk di gunakan</p>
          </div>
          <div className="card__fitur" data-aos="fade-down">
            <h3>kaya manfaat</h3>
            <p>kaya akan manfaat dan bagus untuk di gunakan</p>
          </div>
          <div
            data-aos-delay="1000"
            className="card__fitur"
            data-aos="fade-down"
          >
            <h3>kaya manfaat</h3>
            <p>kaya akan manfaat dan bagus untuk di gunakan</p>
          </div>
          <div
            className="card__fitur"
            data-aos-delay="1000"
            data-aos="fade-down"
          >
            <h3>kaya manfaat</h3>
            <p>kaya akan manfaat dan bagus untuk di gunakan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
