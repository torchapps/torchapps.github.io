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
          <h1>Torch Apps</h1>
          <p className="tagline">
            Mutating the state
          </p>
        </section>

        <section id="about">
          <div className="container">
            <p>
              Torch (formerly FroHawk) is an independent development team based in Manila. We advocate transparency, accountability, and citizen engagement. We make tools for these.
            </p>

            <p>
              <a className="inline" target="_blank" href="https://docs.google.com/forms/d/1rkcPR8o2f6yq3O60X-RWmqyoAYN3zXuhg0tN59U_QhI/viewform">Volunteers</a> are very much appreciated. You can also simply send us a <a className="inline" target="_blank" href="https://docs.google.com/forms/d/1rkcPR8o2f6yq3O60X-RWmqyoAYN3zXuhg0tN59U_QhI/viewform">message</a>.
            </p>
            <p>
              We also get a lot of help from friends who wish to remain anonymous. Thanks guys, we love you.
            </p>
          </div>
        </section>

      </div>
    );
  }
});

React.render(
  <Torch />,
  document.getElementById('torch')
);