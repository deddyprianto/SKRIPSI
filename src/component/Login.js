import React from "react";
import "./Login.css";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { stateValueProvider } from "../StateProvider"; 
import { STATE_AWAL } from "../const/stateCondition";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [{ login }, dispatch] = stateValueProvider();
  const handleButtonLogin = () => {
    const dataLogin = auth.signInWithPopup(provider);
    dataLogin
      .then((data) => {
        dispatch({ type: STATE_AWAL, payload: data });
        history.push("/laporan");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container__Login">
      <h3>Masuk ke Aplikasi dan Buat laporan hanya dengan 1 akses Login</h3>
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
        Login dengan Email
      </Button>
    </div>
  );
}

export default Login;
