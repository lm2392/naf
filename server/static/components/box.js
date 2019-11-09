import React from "react";
import "aframe";
import "babel-polyfill";
import "aframe-particle-system-component";

export default class BOX extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Click happened");
  }
  render() {
    return (
      <a-box
        onClick={this.handleClick}
        color="red"
        position="0 1.6 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      ></a-box>
    );
  }
}
