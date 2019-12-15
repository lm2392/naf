let el = <h1 style={{ color: "yellow" }}>Hello jose!</h1>;

const MyComponent = class MyComponent extends React.Component {
  render() {
    return <p style={{ color: "red" }}>I am a component, too! {this.props.name}</p>;
  }
};

var box = (
  <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
);

var box2 = <a-box position="-2 2 4" rotation="0 45 0" color="#4CffD9"></a-box>;

var box4 = <a-box position="0 0 0" rotation="45 45 45" color="#aa11ff"></a-box>;

const BOX3 = class BOX extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        console.log('Click happened');
    }
    render() {
        return <a-box onClick={this.handleClick} color="red" position="0 1.6 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"></a-box>;
    }
};

ReactDOM.render(
  <a-entity>
    <BOX3></BOX3>
    {box}
    {<a-box position="0 0 0" rotation="45 45 45" color="#aa11ff"></a-box>}
    {box2}
  </a-entity>,
  document.getElementsByTagName("a-entity")[0]
);

ReactDOM.render(
  <div>
    <MyComponent name="Luigi"/>
    <MyComponent name="jose"/>
    <MyComponent name="nicole"/>
    {el}
    {el}
    {el}
  </div>,
  document.getElementById("root")
);
