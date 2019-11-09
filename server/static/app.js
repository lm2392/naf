import BOX from "./components/box";

let el = <h1 style={{ color: "red" }}>Hello jose!</h1>;

var scene = document.getElementById("a-root");

var box =  <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>;

var box2 = <a-box position="-2 2 4" rotation="0 45 0" color="#4CffD9"></a-box>;

ReactDOM.render(
  <a-entity>
    
    {box}
    {box2}
  </a-entity>,
  document.getElementsByTagName("a-entity")[0]
);

ReactDOM.render(
  <div>
    {el}
    {el}
    {el}
  </div>,
  document.getElementById("root")
);
