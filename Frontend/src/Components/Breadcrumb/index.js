import React from "react";
import { Link } from "react-router-dom";
export default class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const locationArray = this.props.page.substring(1).split("/");
    const array = locationArray.splice(locationArray.length - 1, 1);
    return (
      <>
        <ol style={{ paddingTop: "4vw" }} className="breadcrumb">
          {locationArray.map((ele, idx) => {
            return (
              <Link to={`/${ele}`} key={idx} className="breadcrumb-item fs-5">
                {" "}
                {ele}
              </Link>
            );
          })}
          <Link to="#" key={array} className="breadcrumb-item fs-5">
            {" "}
            {array}
          </Link>
        </ol>
      </>
    );
  }
}
