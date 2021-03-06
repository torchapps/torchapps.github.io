require("./styles/Product.scss");

var React = require("react");

var Product = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      <div className="Product" id={ this.props.id }>
        <div className="container">
          <div className="info">
            <h2>
              <a href={ this.props.src } target="_blank">{ this.props.name }</a>
            </h2>
            <p>
              {this.props.description}
            </p>
            
            <a href={ this.props.src } target="_blank">
              Visit Site
            </a>
          </div>
          <div className="image-container">
            <a href={ this.props.src }>
              <img src={ this.props.imgSrc} />
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Product;