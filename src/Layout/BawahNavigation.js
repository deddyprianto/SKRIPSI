import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CropFreeIcon from "@material-ui/icons/CropFree";
import HomeIcon from "@material-ui/icons/Home";
import ScannerIcon from "@material-ui/icons/Scanner";
import { Link } from "react-router-dom";
import "./BawahNavigation.css";
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});
function BawahNavigation() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/" className="link__pertama">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <Link to="/scanqrcode">
        <BottomNavigationAction label="Buat QRCode" icon={<ScannerIcon />} />
      </Link>
      <Link to="/makeqrcode">
        <BottomNavigationAction label="Scann QrCode" icon={<CropFreeIcon />} />
      </Link>
      <Link>
        <BottomNavigationAction label="Login" icon={<AccountCircleIcon />} />
      </Link>
    </BottomNavigation>
  );
}

export default BawahNavigation;
