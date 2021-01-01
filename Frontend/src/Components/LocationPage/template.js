import React from "react";
import { Link } from "react-router-dom";

export default class Template extends React.Component {
  render() {
    const alt = this.props.title + " Image";
    const address = this.props.img.substring(
      this.props.img.lastIndexOf("/") + 1,
      this.props.img.indexOf(".")
    );
    return (
      <>
        <div className="row g-0 py-4 px-5">
          <div className="col-md-6">
            <img
              style={{ height: 90 + "%", width: 100 + "%" }}
              src={this.props.img}
              alt={alt}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5
                style={{
                  color: "cyan",
                  fontSize: 2.5+ "vw",
                  fontFamily: "-moz-initial",
                }}
                className="text-center fw-bold"
              >
                {this.props.title}
              </h5>
              <p
                style={{ fontSize: 1.5 + "vw", fontFamily: "serif" }}
              >
                {this.props.info}
              </p>
              <Link
                to={`/locations/${address}`}
                style={{ textDecoration: "none" }}
              >
                <button
                  className="btn-primary btn-sm"
                  type="button"
                >
                  View <span style={{ fontSize: 150 + "%" }}>&#8594;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
