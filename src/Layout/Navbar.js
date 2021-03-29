import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav__title">Presensi QR Code</div>
      <ul className="list__link">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="makeqrcode">
          <li>Make QRCODE</li>
        </Link>
        <Link to="scanqrcode">
          <li>Scan QRCODE</li>
        </Link>
        <Link to="login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
