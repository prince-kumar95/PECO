import React from "react";

export default class Breadcrumb extends React.Component {
  render() {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              {this.props.page}
            </li>
          </ol>
        </nav>
      </>
    );
  }
}
