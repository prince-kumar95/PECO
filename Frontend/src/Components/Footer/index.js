import React from "react";
import "./index.css";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid justify-content-center text-light ">
          <footer>
            <div className="row justify-content-center py-5">
              <div className="col-11">
                <div className="row ">
                  <div className="col-6 col-md-4 col-sm-4 col-12">
                    <h3 className="text-muted mb-md-0 mb-5 bold-text">
                      P E C O.
                    </h3>
                  </div>                  
                  <div className="col-6 col-md-4 col-sm-4 col-12 mx-auto">
                    <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                      <b>ADDRESS</b>
                    </h6>
                    <p className="mb-1">
                      4 Studio 103, The Business Centre 61 Wellfield Road
                    </p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-xl-4 my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                    <p className="social text-muted mb-0 pb-0 bold-text">
                      {" "}
                      <span className="mx-2">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </span>{" "}
                      <span className="mx-2">
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      <span className="mx-2">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </span>{" "}
                      <span className="mx-2">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </span>{" "}
                    </p>
                    <small className="rights">
                      <span>&#174;</span> PECO All Rights Reserved.
                    </small>
                  </div>
                  <div className="col-4 col-auto order-1 align-self-end ">
                    <h6 className="mt-55 mt-2 text-muted bold-text">
                      <b>E-mail</b>
                    </h6>
                    <small>
                      {" "}
                      <span>
                        <i className="fa fs-4 fa-envelope" aria-hidden="true"></i>
                      </span>{" "}
                      contactus@phoenixeventorganiser.com
                    </small>
                  </div>
                  <div className="col-4 col-auto order-2 align-self-end ">
                    <h6 className="text-muted bold-text">
                      <b>Mobile No.</b>
                    </h6>
                    <small>
                      <span>
                        <i className="fa fs-4 fa-phone" aria-hidden="true"></i>
                      </span>{" "}
                      +91 9738150620
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
