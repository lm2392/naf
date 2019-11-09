import React, { Component } from "react";
import "aframe";
import "babel-polyfill";
import "aframe-particle-system-component";

class SCRIPT extends Component {
  render() {
    return React.createElement("script", {
      src: "https://aframe.io/releases/0.9.2/aframe.min.js"
    });
  }
}

export default SCRIPT;
