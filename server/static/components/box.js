import React, { Component } from "react";
import "aframe";
import "babel-polyfill";
import "aframe-particle-system-component";


class BOX extends Component {
    render() { 
        return (<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        );
    }
}
 
export default BOX;