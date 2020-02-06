import React from "react";
import Products from "./Products";
import "../styles/App.css";
import productsAll from "../products.json";

class Catalog extends React.Component {
  state = {
    search: "",
    all: "",
    apple: "Apple",
    dell: "Dell",
    clear: "Clear"
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  clearSearch(event) {
    this.setState({ search: event.target.value.substr(0, 0) });
  }

  render() {
    let filteredProducts = productsAll.filter(product => {
      return (
        product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div className="container">
        <h1 className="header-big">Catalog</h1>
        <div className="catalog">
          <div className="column-left">
            <div className="filter">
              <div className="filter-header">
                <h4>Search</h4>
                <input
                  className="clear"
                  type="button"
                  name="manufacturere"
                  id="Clear"
                  value={this.state.clear}
                  onClick={this.clearSearch.bind(this)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                />
              </div>
              <h4>Manufacturer</h4>
              <div>
                <div>
                  <input
                    type="radio"
                    name="manufacturere"
                    id="all"
                    value={this.state.all}
                    defaultChecked
                    onChange={this.updateSearch.bind(this)}
                  />
                  <label htmlFor="all">All</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="manufacturere"
                    id="apple"
                    value={this.state.apple}
                    onChange={this.updateSearch.bind(this)}
                  />
                  <label htmlFor="apple">Apple</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="manufacturere"
                    id="dell"
                    value={this.state.dell}
                    onChange={this.updateSearch.bind(this)}
                  />
                  <label htmlFor="dell">Dell</label>
                </div>
              </div>
            </div>
          </div>

          <div className="column-right">
            <div className="products">
              <Products filteredProducts={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
