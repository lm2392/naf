import React, { Component } from 'react';
import 'aframe';
import 'babel-polyfill';
import {Entity,Scene} from 'aframe-react';
import 'aframe-particle-system-component';

class Assets extends Component {
    
    render() { 
        return (<a-assets>
            <img id="galaxy" src="https://raw.githubusercontent.com/lm2392/cosmictour/master/src/sky.png" />
            <img alt="test" id="menutoggle" src="static_assets/menu_assets/menutoggle.png" />
            <img alt="test" id="neptune" src="static_assets/1.jpg" />
            <img alt="test" id="board" src="static_assets/sk-basic.png" />
            <img alt="test" id="cardBk" src="vr/components/cardBK.png" />
            <img alt="test" id="cardBkWht" src="vr/components/cardBkWht.png" />
            <img alt="test" id="0" src="vr/components/0.png" />
            <img alt="test" id="earth" src="vr/components/earth.jpg" />
            <img alt="test" id="mercury" src="vr/components/mercury.png" />
            <a-asset-item id="test" src="vr/components/table.obj"></a-asset-item>
            <a-asset-item id="deck" src="vr/components/deck.obj"></a-asset-item>
            <a-asset-item id="deck-m" src="vr/components/deck.mtl"></a-asset-item>

            <img alt="test" id="aframeKeyboardDismiss" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/DismissIcon.png" />
            <img alt="test" id="aframeKeyboardShift" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/ShiftIcon.png" />
            <img alt="test" id="aframeKeyboardShiftActive" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/ShiftActiveIcon.png" />
            <img alt="test" id="aframeKeyboardEnter" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/EnterIcon.png" />
            <img alt="test" id="aframeKeyboardBackspace" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/BackspaceIcon.png" />
            <img alt="test" id="aframeButtonShadow" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/ButtonShadow.png" />
            <img alt="test" id="aframeCheckboxMark" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/CheckmarkIcon.png" />
            <img alt="test" id="aframeSwitchShadow" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/SwitchShadow.png" />
            <img alt="test" id="aframeKeyboardShadow" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/images/KeyShadow.png" />


            <audio id="1" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/sounds/ButtonClick.mp3" preload="auto"></audio>
            <audio id="2" crossorigin="anonymous" src=" https://www.tuyoisaza.com/VROM/aframe-material-master/assets/sounds/ButtonClickDisabled.mp3" preload="auto"></audio>
            <audio id="3" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/sounds/InputClick.mp3" preload="auto"></audio>
            <audio id="4" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/sounds/KeyDown.mp3" preload="auto"></audio>
            <audio id="5" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/sounds/KeyIn.mp3" preload="auto"></audio>
            <audio id="6" crossorigin="anonymous" src="https://www.tuyoisaza.com/VROM/aframe-material-master/assets/sounds/ToastShow.mp3" preload="auto"></audio>

          </a-assets>);
    }
}
 
export default Assets;