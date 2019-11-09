let el = <h1 style={{ color: "red" }}>Hello jose!</h1>;

const MyComponent = class MyComponent extends React.Component {
  render() {
    return <p>I am a component, too!</p>;
  }
};

var scene = document.getElementById("a-root");

var box = (
  <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
);

var box2 = <a-box position="-2 2 4" rotation="0 45 0" color="#4CffD9"></a-box>;

const BOX3 = class BOX extends React.Component {
  render() {
    return <a-box position="1 -.5 3" rotation="0 45 0" color="red"></a-box>;
  }
};

ReactDOM.render(
  <a-entity>
    <BOX3 />
    {box}
    {box2}
  </a-entity>,
  document.getElementsByTagName("a-entity")[0]
);

ReactDOM.render(
  <div>
    <MyComponent />
    {el}
    {el}
    {el}
  </div>,
  document.getElementById("root")
);
