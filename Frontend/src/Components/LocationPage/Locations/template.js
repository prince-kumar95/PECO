import React from "react";
import Info from "./info";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
    this.addEvents = this.addEvents.bind(this);
    this.cindicators = this.cindicators.bind(this);
    this.addCindicators = this.addCindicators.bind(this);
    this.imgLoad = this.imgLoad.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  cindicators() {
    const data = [];
    for (let i = 1; i < this.props.imgs.length; i++) {
      data.push(this.addCindicators(i));
    }
    return data;
  }
  addCindicators(idx) {
    return (
      <>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={idx}
        ></li>
        ;
      </>
    );
  }

  imgLoad() {
    const data = [];
    for (let i = 1; i < this.props.imgs.length; i++) {
      data.push(this.addImage(this.props.imgs[i]));
    }
    return data;
  }

  addImage(img) {
    return (
      <>
        <div className="carousel-item">
          <img src={img} className="d-block w-100" alt="..." />
        </div>
        ;
      </>
    );
  }

  events = () => {
    const data = [];
    this.props.infos.forEach((element) => {
      data.push(this.addEvents(element[0], element[1]));
    });
    return data;
  };

  addEvents(title, info) {
    return (
      <>
        <div className="content">
          <h1>{title}</h1>
          <p className="lh-lg">{info}</p>
        </div>
      </>
    );
  }
  
  render() {
    return (
      <>
        <div className="temp">
          {this.events()}
          <div className="animate">
            <p
              style={{
                postion: "absolute",
                fontSize: "5vw",
                color: "blue",
                fontFamily: "-moz-initial",
                paddingRight: "5vw",
              }}
              className="text-center"
            >
              {this.props.title}
            </p>
            <div
              id="carouselExampleIndicators"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                {this.cindicators()}
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={this.props.imgs[0]}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                {this.imgLoad()}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div>
        <Info />
      </>
    );
  }
}
