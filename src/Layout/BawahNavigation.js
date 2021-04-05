import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CropFreeIcon from "@material-ui/icons/CropFree";
import HomeIcon from "@material-ui/icons/Home";
import ScannerIcon from "@material-ui/icons/Scanner";
import { useHistory } from "react-router-dom";
import "./BawahNavigation.css";
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});
function BawahNavigation() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const handleBottomHome = (e) => {
    e.preventDefault();
    history.push("/");
  };
  const handleBotomMakeQrCode = (e) => {
    e.preventDefault();
    history.push("/makeqrcode");
  };
  const handleBottomScanQrCode = (e) => {
    e.preventDefault();
    history.push("/scanqrcode");
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        icon={<HomeIcon />}
        label="Home"
        onClick={handleBottomHome}
      />

      <BottomNavigationAction
        onClick={handleBotomMakeQrCode}
        label="Buat QRCode"
        icon={<ScannerIcon />}
      />

      <BottomNavigationAction
        onClick={handleBottomScanQrCode}
        label="Scann QrCode"
        icon={<CropFreeIcon />}
      />

      <BottomNavigationAction label="Login" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}

export default BawahNavigation;
