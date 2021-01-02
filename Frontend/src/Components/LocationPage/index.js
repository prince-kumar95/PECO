import React from "react";
import LocationHome from "./locationhome";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

export default class Location extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <NavigationBar />
        <hr
          className="mx-auto"
          style={{ maxWidth: 90 + "%", marginTop: 1 + "vw" }}
        ></hr>
        <h1
          className="text-center fw-bold"
          style={{ fontFamily: "-moz-initial", fontSize: "3vw" }}
        >
          Our Venue
        </h1>
        <hr className="mx-auto" style={{ maxWidth: 90 + "%" }}></hr>

        <div className="mx-auto" style={{ maxWidth: 85 + "vw" }}>
          <LocationHome />
        </div>
        <Footer />
      </>
    );
  }
}
