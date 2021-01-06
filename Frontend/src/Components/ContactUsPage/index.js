import React from "react";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import Recaptcha from "react-recaptcha";
import "./index.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerified: false,
      name: "",
      email: "",
      phNo: "",
      date: "",
      natureOfEvent: "",
      message: "",
      error: "",
      chooseEvent: "Choose Event",
      loading: false,
      items: [
        "Wedding",
        "Birthday",
        "Fashion Events",
        "Meeting Events",
        "Annual Days",
        "Family Days",
        "Corporate Parties",
        "Award Shows",
        "Employee Engagement and Fun Days",
        "Product / Brand / Facility Launches",
        "Customer Meets / Dealer Meets",
        "Conference and Exhibitions",
      ],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = async () => {
    fetch("https://pe-co-backend.herokuapp.com/contact-us", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phNo: this.state.phNo,
        date: this.state.date.split("T")[0],
        natureOfEvent: this.state.chooseEvent,
        message: this.state.message,
        isVerified: this.state.isVerified,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.err) {
          this.setState({ error: json.err, isVerified: false, loading: false });
        } else {
          alert(json.success);

          this.setState({
            isVerified: false,
            name: "",
            email: "",
            phNo: "",
            date: "",
            natureOfEvent: "",
            message: "",
            error: "",
            loading: false,
          });
        }
      });

    this.state.recaptchaInstance.reset();
  };

  showLoader= () => {
    this.setState({ loading: true });
  };

  verifyCallback = (response) => {
    if (response) {
      this.setState({ isVerified: true });
    }
  };

  callback = () => {
    console.log("Captcha Loaded");
  };

  render() {
    return (
      <>
        <NavigationBar />
        <div className="row">
          <div className="col">
            <div className="wrapper">
              <div className="overlay">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-9">
                    <div className="contact-us text-center">
                      <p
                        className="fw-bold"
                        style={{ fontSize: "4vw", color: "brown" }}
                      >
                        CONTACT US
                      </p>
                      <div className="row">
                        <div className=" address col-md-4">
                          <div className="info">
                            <div className="d-flex flex-row align-items-center">
                              {" "}
                              <span className="icons">
                                <i className="fa fa-map-marker"></i>
                              </span>
                              <div className="address text-left">
                                {" "}
                                <span>Address</span>
                                <p>
                                  4Studio 103, The Business Centre 61 Wellfield
                                  Road
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              {" "}
                              <span className="icons">
                                <i className="fa fa-phone"></i>
                              </span>
                              <div className="address text-left">
                                {" "}
                                <span>Phone</span>
                                <p>+91 9738150620</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              {" "}
                              <span className="icons">
                                <i className="fa fa-envelope"></i>
                              </span>
                              <div className="address text-left">
                                {" "}
                                <span>E-mail</span>
                                <p>contactus@phoenixeventorganiser.com</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{ paddingLeft: "4vw" }}
                          className="col-md-8"
                        >
                          <div className="text-center ">
                            <div className="forms bg-grey">
                              <h5
                                style={{ fontFamily: "-moz-initial" }}
                                className="fw-bold"
                              >
                                EQUIRY FORM
                              </h5>

                              <p className="req" style={{ fontSize: "1vw" }}>
                                <span style={{ color: "red" }}>* </span>Required
                                Fields
                              </p>
                              <div className="inputs">
                                {" "}
                                <h6 className="font-weight-bold">Name</h6>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                  value={this.state.name}
                                  onChange={(e) =>
                                    this.setState({ name: e.target.value })
                                  }
                                />{" "}
                                <h6 className="font-weight-bold">
                                  E-mail<span style={{ color: "red" }}> *</span>
                                </h6>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email"
                                  value={this.state.email}
                                  required
                                  onChange={(e) =>
                                    this.setState({ email: e.target.value })
                                  }
                                />{" "}
                                <h6 className="font-weight-bold">
                                  Mobile No.
                                  <span style={{ color: "red" }}> *</span>
                                </h6>
                                <input
                                  type="tel"
                                  className="form-control"
                                  placeholder="Phone Number"
                                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                  minLength="10"
                                  maxLength="10"
                                  value={this.state.phNo}
                                  required
                                  onChange={(e) =>
                                    this.setState({ phNo: e.target.value })
                                  }
                                />{" "}
                                <h6 className="font-weight-bold">
                                  Date of Event
                                </h6>
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="Date"
                                  min={new Date().toISOString().split("T")[0]}
                                  value={this.state.date}
                                  onChange={(e) =>
                                    this.setState({
                                      date: e.target.value,
                                    })
                                  }
                                />{" "}
                                <h6 className="font-weight-bold">
                                  Nature Of Event
                                  <span style={{ color: "red" }}> *</span>
                                </h6>
                                <div>
                                  <button
                                    className="dropdown-toggle form-control show text-left"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    {this.state.chooseEvent}
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    {" "}
                                    {this.state.items.map((ele, idx) => {
                                      return (
                                        <li
                                          key={idx}
                                          className=" btn dropdown-item"
                                          onClick={() =>
                                            this.setState({
                                              chooseEvent: ele,
                                            })
                                          }
                                        >
                                          {ele}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                <h6 className="font-weight-bold">Message</h6>
                                <textarea
                                  className="form-control"
                                  placeholder="Type your message"
                                  value={this.state.message}
                                  onChange={(e) =>
                                    this.setState({ message: e.target.value })
                                  }
                                ></textarea>{" "}
                                <p style={{ color: "red" }}>
                                  {this.state.error}
                                </p>
                                <Recaptcha
                                  ref={(e) =>
                                    (this.state.recaptchaInstance = e)
                                  }
                                  sitekey="6Ldy4BgaAAAAAGqjSvfCCjh_pd6dYgj80IiEsPFW"
                                  render="explicit"
                                  verifyCallback={this.verifyCallback}
                                  onloadCallback={this.callback}
                                />
                              </div>
                              <div className="button">
                                {" "}
                                <button
                                  onClick={() => {
                                    this.showLoader();
                                    this.handleClick();
                                  }}
                                  className="btn btn-primary"
                                >
                                  {this.state.loading && (
                                    <i
                                      className="fa fa-refresh fa-spin"
                                      style={{ marginRight: "5px" }}
                                    />
                                  )}
                                  {this.state.loading && (
                                    <span>Please Wait...</span>
                                  )}
                                  {!this.state.loading && <span>Send</span>}
                                </button>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <Footer />
      </>
    );
  }
}