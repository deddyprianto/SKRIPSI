import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./component/Main";
import MakeQrCode from "./component/MakeQrCode";
import ScanQrCode from "./component/ScanQrCode";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import useWindowSize from "./CustomHook/useWindowSize";
import BawahNavigation from "./Layout/BawahNavigation";
import Divider from "@material-ui/core/Divider";
import Login from "./component/Login";
import { stateValueProvider } from "./StateProvider";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./FallBack";
import LaporanScreen from "./component/Laporan/LaporanScreen";
function App() {
  const { width } = useWindowSize();
  const errorHandler = (error, errorInfo) => {
    console.log("your err");
  };
  return (
    <Router>
      <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/laporan">
              <LaporanScreen />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/scanqrcode">
              <ScanQrCode />
            </Route>
            <Route path="/makeqrcode">
              <MakeQrCode />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
          {width < 800 ? <BawahNavigation /> : <Footer />}
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
