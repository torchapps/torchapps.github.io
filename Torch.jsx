require("./styles/styles.scss");

// npm components
var React = require("react");

// custom components
var Donate = require("./Donate.jsx");

var Torch = React.createClass({
  render: function() {
    return (
      <div className="Torch">
        <Donate />
        <section id="banner">
          <i id="logo" className="icon-torch" />
          <h1>
            Torch Apps
          </h1>
          <p className="tagline">
            Mutating the state
          </p>
        </section>
      </div>
    );
  }
});

React.render(
  <Torch />,
  document.getElementById('torch')
);