import React from "react";
import { Button } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "./modalValue.css";
const ModalValue = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div className="container-modal">
      <p>
        Bukti bisa berupa Surat sakit dari dokter & Photo anda lagi keadaan
        sakit
      </p>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload Photo
      </Button>
    </div>
  );
};

export default ModalValue;
