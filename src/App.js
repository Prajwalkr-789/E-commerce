import logo from "./logo.svg";
import "./App.css";
import Imges_scroll from "./Components/Imges_scroll";
import Navbar from "./Components/Navbar";
import Sneaker from "./Components/Sneaker";
import Snekaer_control from "./Components/Snekaer_control";
import Slider from "./Components/Slider";
import Quickreview from "./Components/Quickreview";
import ElectronicsController from "./Components/ElectronicsController";
import Bottlecontroller from "./Components/Bottlecontroller";
import Capcontroller from "./Components/Capcontroller";
import Boot from "./Components/Boot";
import Bootcontroller from "./Components/Bootcontroller";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import appstore from "./Utils/appstore";
import { useState } from "react";
import Signin from "./Components/Signin";
import Register from "./Components/Register";
import Filters from "./Components/Filters";

function App() {
  const [iscartopen, setiscartopen] = useState(false);
  const [isauthopen, setisauthopen] = useState(false);
  const [filtereditems, setfiltereditems] = useState("All");

  const togglecart = () => {
    setiscartopen(!iscartopen);
  };

  const authopen = () => {
    setisauthopen(true);
  };

  return (
    <div>
      <Provider store={appstore}>
        <Router>
          <Navbar togglecart={togglecart} setisauthopen={setisauthopen} authopen={authopen} />

          {isauthopen ? (
            <Routes>
              <Route path="/register" Component={Register} />
              <Route path="/signin" Component={Signin} />
              <Route path="/cart" Component={Cart} />
            </Routes>
          ) : (
            <>
              <Intro />
              <Slider />
              <Filters setfiltereditems={setfiltereditems} />
              {filtereditems === "All" && (
                <>
                  <Snekaer_control />
                  <ElectronicsController />
                  <Bottlecontroller />
                  <Bootcontroller />
                  <Capcontroller />
                </>
              )}
              {filtereditems === "Shoes" && (
                <>
                  <Snekaer_control />
                  <Bootcontroller />
                </>
              )}
              {filtereditems === "Caps" && (
                <>
                  <Capcontroller />
                </>
              )}
              {filtereditems === "Electronics" && (
                <ElectronicsController />
              )}
              {filtereditems === "Bottles" && (
                <Bottlecontroller />
              )}
              <Footer />
            </>
          )}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
