import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import "./index.css";
import Location from "./Components/LocationPage";
import Contact from "./Components/ContactUsPage";
import Place from "./Components/LocationPage/Locations";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/locations/:name">
              <Place />
            </Route>
            <Route path="/about-us">
              <About />
            </Route>
            <Route path="/locations">
              <Location />
            </Route>
            <Route path="/contact-us">
              <Contact />
            </Route>            
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="div1">Hello</div> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
