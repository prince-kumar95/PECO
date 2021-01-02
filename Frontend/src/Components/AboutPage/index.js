import React from "react";
import Navigation from "../NavigationBar";
import Banner from "../imgs/banner.jpg";
import Footer from "../Footer";
import graph from "../imgs/graph.jpg";
import graphp from "../imgs/graph.png";
import mapp from "../imgs/map.png";
import team from "../imgs/team.png";
import clients from "../imgs/clients.png";
import hosted from "../imgs/hosted.png";
import deliver from "../imgs/deliver.png";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Navigation />
        <img
          style={{
            width: 60 + "vw",
            marginLeft: 20 + "vw",
            marginTop: 5 + "vw",
          }}
          src={Banner}
          className=""
          alt="Home Banner"
        />
        <hr className="my-4 mx-auto" style={{ maxWidth: 90 + "%" }}></hr>
        <h1
          style={{
            color: "Background",
            fontFamily: "-moz-initial",
            fontSize: 5 + "vw",
          }}
          className="text-center fw-bolder"
        >
          {" "}
          About Us
        </h1>
        <hr className="my-4 mx-auto" style={{ maxWidth: 90 + "%" }}></hr>
        <p
          className=" about text-center px-5 lh-lg"
          style={{ fontSize: "1.7vw" }}
        >
          Our vision when we started P E C O was to do something more. Our
          professional, 360-degree approach, clear brand vision, and experience
          working with clients across industry segments have made us passionate
          about delivering beyond the expected. We like to nurture your brand,
          understand just what you have in mind and translate it into a
          well-planned, innovative and well-organized event. We offer a variety
          of different services. This includes Corporate Event Management,
          conferences and more. Celebrate with us, and we’ll ensure you have the
          most wonderfully executed experience.
        </p>
        <div className=" mx-auto card mb-3" style={{ maxWidth: 60 + "vw" }}>
          <div className="row g-0">
            <div className="col-md-6">
              <img
                style={{ width: 100 + "%", height: 100 + "%" }}
                src={graph}
                alt="Graph.jpg"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <p
                  className=" lh-lg card-text"
                  style={{ fontSize: "2vw", color: "blue" }}
                >
                  Started in 2013, P E C O is now considered one amongst the top
                  event management companies based out of Bangalore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" credentials lh-lg px-5">
          <h1
            style={{
              color: "Background",
              fontFamily: "-moz-initial",
              fontSize: 7 + "vw",
              marginTop: 0 + "px",
            }}
            className="fw-bolder"
          >
            {" "}
            Our Credentials
          </h1>
          <ul>
            <li style={{ display: "flex", alignItems: "center" }}>
              <span className="fs-2">
                400+ events in a span of 5 years since inception
              </span>
              <img
                style={{ paddingLeft: 25 + "vw" }}
                src={graphp}
                alt="CredentialsGraph.jpg"
              />
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ width: 20 + "%" }}
                src={mapp}
                alt="Credentialsmap.jpg"
              />
              <span className="fs-2" style={{ paddingLeft: 25 + "vw" }}>
                Expertise to handle events pan India
              </span>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <span className="fs-2">
                Full fledged team to plan and execute events seamlessly
              </span>
              <img
                style={{ paddingLeft: 25 + "vw" }}
                src={team}
                alt="Credentialsmap.jpg"
              />
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ width: 20 + "%" }}
                src={clients}
                alt="Credentialsmap.jpg"
              />
              <span className="fs-2" style={{ paddingLeft: 25 + "vw" }}>
                110+ clients under different verticals
              </span>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <span className="fs-2">
                Hosted 100000+ delighted attendees till date{" "}
              </span>
              <img
                style={{ paddingLeft: 25 + "vw" }}
                src={hosted}
                alt="Credentialsmap.jpg"
              />
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ width: 20 + "%" }}
                src={deliver}
                alt="Credentialsmap.jpg"
              />
              <span className="fs-2" style={{ paddingLeft: 20 + "vw" }}>
                {" "}
                Deliver events with impeccable quality in a professional &
                timely manner
              </span>
            </li>
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}
