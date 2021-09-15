import React, { useRef, useState, forwardRef } from "react";
import { Button } from "@material-ui/core";
import { CloudUpload, Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import useWindowSize from "../CustomHook/useWindowSize";
import { stateValueProvider } from "../StateProvider";
import { STATE_BUKTI_SAKIT, STATE_MODAL } from "../const/stateCondition";
import firebase from "firebase";
import db, { storage } from "../firebase";
import SendIcon from "@material-ui/icons/Send";
// render Component
const ModalValue = () => {
  const [{ nama, statusSakit }, dispatch] = stateValueProvider();
  const filePicker = useRef(null);
  const [imagetopost, setImagetopost] = useState();
  const [conditiontext, setConditiontext] = useState(false);
  const [urlImage, setUrlImage] = useState("");
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    paper: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  const classes = useStyles();

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setUrlImage(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImagetopost(readerEvent.target.result);
    };
  };
  const removeImage = () => {
    setImagetopost(null);
  };
  const addImageToDB = (e) => {
    e.preventDefault();
    if (urlImage) {
      const uploadTask = storage.ref(`image/${urlImage.name}`).put(urlImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => console.log(snapshot),
        (err) => alert(err),
        () => {
          storage
            .ref("image")
            .child(urlImage.name)
            .getDownloadURL()
            .then((url) => {
              const tanggal = new Date();
              const hari = tanggal.toLocaleString();
              db.collection("dataabsen").add({
                hari: hari,
                urlImg: url,
                nama: nama,
                status: statusSakit,
              });
            });
        }
      );
    }
  };
  return (
    <div className={classes.paper}>
      <div onClick={() => filePicker.current.click()}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CloudUpload />}
        >
          Upload Surat
        </Button>
        <input
          type="text"
          onChange={addImage}
          type="file"
          hidden
          ref={filePicker}
        />
      </div>
      {imagetopost ? (
        <div className="container-gambarPrev">
          <img
            style={{ width: "100%" }}
            height={200}
            src={imagetopost}
            alt=""
          />
          <Close
            onClick={removeImage}
            fontSize="small"
            style={{ color: "red" }}
          />
        </div>
      ) : (
        <p>
          Bukti bisa berupa Surat sakit dari dokter & Photo anda lagi keadaan
          sakit
        </p>
      )}
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
        onClick={addImageToDB}
      >
        SEND
      </Button>
    </div>
  );
};

export default ModalValue;
