import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useWindowSize from "../CustomHook/useWindowSize";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [value, setValue] = useState(0);
  const { width } = useWindowSize();

  return (
    <div className="navbar">
      <div className="nav__title">Absensi Guru SDS MelBourne</div>
      {width <= 800 ? (
        <div className="nav__title">
          <h2 style={{ fontSize: "15px" }}>2021</h2>
        </div>
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
