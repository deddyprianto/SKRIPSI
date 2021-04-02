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
function App() {
  const { width } = useWindowSize();
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
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
    </Router>
  );
}

export default App;
