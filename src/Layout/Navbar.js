import React, { useState } from "react";
import logosd from "../img/logoSD.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useWindowSize from "../CustomHook/useWindowSize";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const [value, setValue] = useState(0);
  const { width } = useWindowSize();

  return (
    <div className="navbar">
      <div className="navbar__Logo">
        <img src={logosd} width={50} height={50} alt="" />
        <h2>Absensi Guru SDS MelBourne</h2>
      </div>
      {width <= 800 ? (
        <div className="nav__title">
          <h2>2021</h2>
        </div>
      ) : (
        <ul className="list__link">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="makeqrcode">
            <li>Make QRCode</li>
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
