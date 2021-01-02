import React from "react";
import HomeBanner from "../imgs/home.jpg";
import Footer from "../Footer";
import HomePage from "./home";
import NavigationBar from "../NavigationBar";

export default class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <NavigationBar />
        <img
          src={HomeBanner}
          style={{ opacity: 0.7, width: 100 + "vw", height: "40vw" }}
          alt="Home Banner"
        />
        <hr className="mx-auto" style={{ maxWidth: 90 + "%" }}></hr>
        <p
          style={{
            color: "orangered",
            fontSize: "2.5vw",
            fontFamily: "-moz-initial",
          }}
          className=" home fw-bold text-center"
        >
          What We Organize
        </p>
        <hr className="mx-auto" style={{ maxWidth: 90 + "%" }}></hr>

        <div className="mx-auto" style={{ maxWidth: 85 + "vw" }}>
          <HomePage />
        </div>
        <Footer />
      </>
    );
  }
}
