import React from "react";
import "../styles/App.css";
import { NavLink } from "react-router-dom";

const list = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "About", path: "/about" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav">{menu}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
