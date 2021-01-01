import React from "react";
import Template from "./template";
import content from "./content";

export default class HomeContent extends React.Component {
  render() {
    const dataArray = [];
    content.forEach((element) => {
      const id = element[1].substring(
        element[1].lastIndexOf("/") + 1,
        element[1].indexOf(".")
      );
      dataArray.push(
        <Template
          id={id}
          img={element[1]}
          key={element[0]}
          title={element[0]}
          info={element[2]}
        />
      );
    });
    // console.log(dataArray);

    return <>{dataArray}</>;
  }
}
