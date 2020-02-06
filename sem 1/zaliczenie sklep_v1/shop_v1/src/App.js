import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>{<Navigation />}</div>
        <div>{<Main />}</div>
        <div>{<Footer />} </div>
      </Router>
    );
  }
}

export default App;
