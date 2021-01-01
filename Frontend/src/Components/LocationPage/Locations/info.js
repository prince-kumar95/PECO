import React from "react";
import { Link } from "react-router-dom";

export default class Info extends React.Component {
  render() {
    return (
      <>
        <div className="text-center" id="info-box">
          <p>
            Customised packages are also available for more than 500 persons
          </p>
          <Link to="/contact-us" style={{textDecoration:"none"}}>
            <button className="btn-primary">CONTACT US</button>
          </Link>
        </div>
      </>
    );
  }
}
