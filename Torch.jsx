require("./styles/styles.scss");

// npm components
var React = require("react");

// custom components
var Donate = require("./Donate.jsx");
var Product = require("./Product.jsx");

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

        <section id="apps">
          <Product 
            id="Politiko" 
            name="Politiko" 
            imgSrc="images/politiko.png" 
            src="http://politi-ko.com"
            description="Compare your views with that of political candidates" />
          <Product 
            id="Rollcall" 
            name="Rollcall" 
            imgSrc="images/rollcall.png" 
            src="http://rollcall.ph"
            description="Check congress attendance" />
          <Product 
            id="MeetApp" 
            name="MeetApp" 
            imgSrc="images/meetapp.png" 
            src="https://torchapps.github.io/MeetApp"
            description="Moderate your roundtable discussions" />
          <Product 
            id="Butthurt" 
            name="Butthurt" 
            imgSrc="images/butthurt.png" 
            src="https://torchapps.github.io/butthurt"
            description="Butthurt is a tribute to Filipino (over)sensitivities, and nothing more." />
        </section>

        <footer>
          <blockquote>
            <h3>
              &quot;The price of freedom is eternal vigilance.&quot;
            </h3>
            <p>
              John Philpot Curran
            </p>
          </blockquote>
        </footer>

      </div>
    );
  }
});

React.render(
  <Torch />,
  document.getElementById('torch')
);