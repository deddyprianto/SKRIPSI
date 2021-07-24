import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import useWindowSize from "./CustomHook/useWindowSize";
import BawahNavigation from "./Layout/BawahNavigation";
import Divider from "@material-ui/core/Divider";
import { stateValueProvider } from "./StateProvider";

const Main = lazy(() => import("./component/Main"));
const MakeQrCode = lazy(() => import("./component/MakeQrCode"));
const ScanQrCode = lazy(() => import("./component/ScanQrCode"));
const Login = lazy(() => import("./component/Login"));
const LaporanScreen = lazy(() => import("./component/Laporan/LaporanScreen"));
function App() {
  const { width } = useWindowSize();
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Suspense fallback={<div>Page Is Loading, Please wait...</div>}>
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
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
          {width < 800 ? <BawahNavigation /> : <Footer />}
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
