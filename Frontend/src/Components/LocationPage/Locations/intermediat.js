import React from "react";
import Template from "./template";
import content from "./content";

export default class Intermediate extends React.Component {
  render() {
    const index = this.props.index;
    const title = content[index];
    return (
      <Template
        key={title[index]}
        title={content[index][0]}
        imgs={content[index][1]}
        infos={content[index][2]}
      />
    );
  }
}
