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
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = async () => {
    if (
      this.state.email !== "" &&
      this.state.phNo !== "" &&
      this.state.natureOfEvent !== ""
    ) {
      if (this.state.phNo.length === 10) {
        if (
          new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
            this.state.email
          )
        ) {
          if (this.state.isVerified) {
            fetch("http://localhost:9999/contact-us", {
              method: "POST",
              body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                phNo: this.state.phNo,
                date: this.state.date.split("T")[0],
                natureOfEvent: this.state.natureOfEvent,
                message: this.state.message,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((json) => alert(json.success));

            this.setState({
              isVerified: false,
              name: "",
              email: "",
              phNo: "",
              date: "",
              natureOfEvent: "",
              message: "",
              error: "",
            });
            this.state.recaptchaInstance.reset();
          } else {
            this.setState({ error: "Please verify urself!" });
          }
        } else {
          this.setState({ error: "Please enter a valid E-mail address" });
          this.state.recaptchaInstance.reset();
        }
      } else {
        this.setState({ error: "please Enter a 10 digit phone Number" });
        this.state.recaptchaInstance.reset();
      }
    } else {
      this.setState({ error: "Please fill in the required fields!" });
      this.state.recaptchaInstance.reset();
    }
  };

  verifyCallback = (response) => {
    if (response) {
      this.setState({ isVerified: true });
    }
  };

  callback = () => {};

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
                              <div className="inputs">
                                {" "}
                                <h6>Name</h6>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                  value={this.state.name}
                                  onChange={(e) =>
                                    this.setState({ name: e.target.value })
                                  }
                                />{" "}
                                <h6>E-mail</h6>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email *"
                                  value={this.state.email}
                                  required
                                  onChange={(e) =>
                                    this.setState({ email: e.target.value })
                                  }
                                />{" "}
                                <h6>Mobile No.</h6>
                                <input
                                  type="tel"
                                  className="form-control"
                                  placeholder="Phone Number *"
                                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                  minLength="10"
                                  maxLength="10"
                                  value={this.state.phNo}
                                  required
                                  onChange={(e) =>
                                    this.setState({ phNo: e.target.value })
                                  }
                                />{" "}
                                <h6>Data of Event</h6>
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
                                <h6>Nature Of Event</h6>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Nature Of Event *"
                                  value={this.state.natureOfEvent}
                                  required
                                  onChange={(e) =>
                                    this.setState({
                                      natureOfEvent: e.target.value,
                                    })
                                  }
                                />{" "}
                                <h6>Message</h6>
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
                                  onClick={this.handleClick}
                                  className="btn btn-primary"
                                >
                                  Send
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
