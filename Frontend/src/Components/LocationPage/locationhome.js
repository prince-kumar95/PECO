import React from "react";
import Template from "./template";
import content from "./content";

export default class HomeContent extends React.Component {
  render() {
    const dataArray = [];
    content.forEach((element) => {
      dataArray.push(
        <Template
          img={element[1]}
          key={element[0]}
          title={element[0]}
          info={element[2]}
        />
      );
    });
    return <>{dataArray}</>;
  }
}
