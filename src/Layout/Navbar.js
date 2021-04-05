import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useWindowSize from "../CustomHook/useWindowSize";

function Navbar() {
  const [value, setValue] = useState(0);
  const { width } = useWindowSize();

  return (
    <div className="navbar">
      <div className="nav__title">Absensi Guru MelBourne</div>
      {width <= 800 ? (
        <div className="nav__title">2021</div>
      ) : (
        <ul className="list__link">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="makeqrcode">
            <li>Buat QRCode</li>
          </Link>
          <Link to="scanqrcode">
            <li>Scan QRCode</li>
          </Link>
          <Link to="login">
            <li>Login</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
