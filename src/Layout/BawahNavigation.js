import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CropFreeIcon from "@material-ui/icons/CropFree";
import HomeIcon from "@material-ui/icons/Home";
import ScannerIcon from "@material-ui/icons/Scanner";
// import Divider from "@material-ui/core/Divider";
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
    <div className="container__bawahNavigation">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Buat QRCode" icon={<ScannerIcon />} />
        <BottomNavigationAction label="Scann QrCode" icon={<CropFreeIcon />} />
        <BottomNavigationAction label="Login" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default BawahNavigation;
