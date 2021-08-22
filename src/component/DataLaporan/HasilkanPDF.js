import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { PictureAsPdf } from "@material-ui/icons";
const HasilkanPDF = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<PictureAsPdf />}
      />
    </div>
  );
};

export default HasilkanPDF;
