import React from "react";
import Product from "./Product";

class Products extends React.Component {
  render() {
    return (
      <>
        {this.props.filteredProducts.map(product => {
          return <Product product={product} key={product.id} />;
        })}
      </>
    );
  }
}

export default Products;
