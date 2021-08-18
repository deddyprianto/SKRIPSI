import React from "react";
import "./Login.css";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { stateValueProvider } from "../StateProvider";
import { STATE_LOGIN, STATE_SNACKBAR } from "../const/stateCondition";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [{ login }, dispatch] = stateValueProvider();
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

  return (
    <div className="container__Login">
      <h3 style={{ textAlign: "center" }}>
        Halaman Login Khusus <br /> OPERATOR & KEPALA SEKOLAH
      </h3>
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
    </div>
  );
}

export default Login;
