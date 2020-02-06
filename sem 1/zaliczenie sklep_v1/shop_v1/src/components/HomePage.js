import React from "react";
import "../styles/App.css";
import Products from "./Products";
import productsAll from "../products.json";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="header-big">Welcome to our store</h1>
        <h2 className="header-small">Desktops</h2>
        <div className="products">
          <Products
            filteredProducts={productsAll.filter(product => {
              return (
                product.featured === true && product.category === "desktop"
              );
            })}
          />
        </div>

        <h2 className="header-small">Tablets</h2>
        <div className="products">
          <Products
            filteredProducts={productsAll.filter(product => {
              return product.featured === true && product.category === "tablet";
            })}
          />
        </div>
      </div>
    );
  }
}

export default Home;
