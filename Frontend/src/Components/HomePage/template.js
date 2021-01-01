import React from "react";

export default class Template extends React.Component {
  render() {
    const alt = this.props.title + " Image";
    return (
      <>
        <div className="row g-0 py-4 px-5">
          <div className=" row-img mx-auto col-md-6">
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
                  fontSize: 2.5 + "vw",
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
              <button
                type="button"
                className="btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target={`#staticBackdrop${this.props.id}`}
              >
                View Events <span style={{ fontSize: 100 + "%" }}>&#8594;</span>
              </button>
              <div
                className="modal fade"
                id={`staticBackdrop${this.props.id}`}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered ">
                  <div className="modal-content">
                    <div className="modal-header text-center">
                      <h4
                        className="modal-title fw-bold w-100 text-success"
                        id="staticBackdropLabel"
                      >
                        {this.props.title}
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        X
                      </button>
                    </div>
                    <div className="modal-body">{this.props.info}</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
