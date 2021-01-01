import React from "react";
import Intermediate from "./intermediat";
import NavigationBar from "../../NavigationBar";

export default class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.array = [
      "Tranquil",
      "krishna",
      "golden-mile",
      "halcony",
      "octave",
      "nirvana",
      "white",
      "roma",
      "vinay",
      "octaveSuits",
    ];
  }
  render() {
    const location = window.location.pathname;
    const title = location.substring(location.lastIndexOf("/") + 1);
    const index = this.array.indexOf(title);
    return (
      <>
        <NavigationBar />
        <Intermediate index={index} />
      </>
    );
  }
}
