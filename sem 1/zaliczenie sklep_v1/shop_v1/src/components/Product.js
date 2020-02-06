import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img src={this.props.product.image} alt={this.props.product.name} />
        <p className="price">{this.props.product.amount}</p>
        <h3>{this.props.product.name}</h3>
      </div>
    );
  }
}

export default Product;
