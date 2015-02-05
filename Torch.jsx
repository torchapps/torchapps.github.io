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
      </div>
    );
  }
});

React.render(
  <Torch />,
  document.getElementById('torch')
);