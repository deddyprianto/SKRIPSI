import React, { useEffect, useState } from "react";
import "./Login.css";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Button } from "@material-ui/core";

import { stateValueProvider } from "../StateProvider";
import {
  STATE_LOGIN,
  STATE_SNACKBAR,
  STATE_MODAL_LOGIN,
} from "../const/stateCondition";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckIcon from "@material-ui/icons/Check";
import db, { auth, provider } from "../firebase";

function Login() {
  const history = useHistory();
  const [{ login, modalLogin }, dispatch] = stateValueProvider();
  const [verifyEmail, setVerifyEmail] = useState();
  const [textField, setTextField] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    db.collection("dataabsen").onSnapshot((snapshot) => {
      setVerifyEmail(snapshot.docs.map((doc) => doc.data()));
    });
    dispatch({ type: STATE_MODAL_LOGIN, payload: true });
  }, []);

  const handleButtonLogin = () => {
    const dataLogin = auth.signInWithPopup(provider);
    dataLogin
      .then((data) => {
        dispatch({ type: STATE_LOGIN, payload: data });
        history.push("/laporan");
      })
      .catch((err) => console.log(err));
    dispatch({ type: STATE_SNACKBAR, payload: true });
  };
  const fnCheckEmail = () => {
    const [dataEmail] = verifyEmail;
    if (
      dataEmail.kepalasekolah === textField ||
      dataEmail.admin === textField
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="container__Login">
      {loading && (
        <>
          <h2 style={{ textAlign: "center" }}>
            Halaman Login Khusus <br /> OPERATOR SEKOLAH
          </h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            alt=""
            width={300}
            height={300}
          />
          <Button
            onClick={handleButtonLogin}
            variant="contained"
            color="secondary"
            startIcon={<AlternateEmailIcon />}
          >
            Login dengan Gmail
          </Button>
        </>
      )}
      <Dialog
        open={modalLogin}
        onClose={() => dispatch({ type: STATE_MODAL_LOGIN, payload: false })}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Apakah anda Operator Sekolah ???
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hanya Operator Sekolah yg dapat mengakses fitur ini
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Masukkan Email untuk verifikasi"
            type="email"
            fullWidth
            onChange={(e) => setTextField(e.target.value)}
          />
          {loading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "gray" }}>Haloo Operator Sekolah</p>
            </div>
          ) : (
            <p style={{ color: "red", fontStyle: "italic" }}>
              Kamu Bukan Operator Sekolah, Harap masukkan Email Operator Sekolah
              yg benar
            </p>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {!loading ? (
              <Button
                style={{ marginTop: 10 }}
                variant="outlined"
                color="secondary"
                onClick={fnCheckEmail}
              >
                Cek Email
              </Button>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckIcon style={{ color: "green", fontSize: 70 }} />
                <p style={{ fontSize: 13, color: "gray" }}>verified</p>
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              dispatch({ type: STATE_MODAL_LOGIN, payload: false })
            }
            color="primary"
          >
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;
