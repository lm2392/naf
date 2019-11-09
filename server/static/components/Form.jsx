import React, { Component } from "react";
import "aframe";
import "babel-polyfill";
import "aframe-particle-system-component";


class FORM extends Component {
    render() { 
        return ( React.createElement("div", {
            class: "flexbox-container"
          }, React.createElement("div", {
            class: "customClass2"
          }, React.createElement("form", {
            action: "",
            method: "POST"
          }, React.createElement("div", {
            class: "form-group"
          }, React.createElement("input", {
            class: "form-control",
            type: "text",
            name: "custun",
            placeholder: "Username"
          }), React.createElement("br", null), React.createElement("input", {
            class: "form-control",
            type: "password",
            name: "custPassword",
            placeholder: "Password"
          }), React.createElement("br", null), React.createElement("input", {
            class: "form-control",
            type: "submit",
            name: "submit"
          }))), React.createElement("a", {
            href: "signup.php"
          }, "New user? :) "))) );
    }
}
 
export default FORM;