import React from "react";
import { Link } from "react-router-dom";
import Logo from './logo.svg';
import "./NavMenu.css";

function NavMenu() {
  return (
    <nav>
      <div>
      <Link to="/"><img src={Logo} alt="logo"></img></Link>
      </div>
      <ul>
        <li key="forretter">
          <Link to="/forret">Forretter</Link>
        </li>
        <li key="hovedretter">
          <Link to="/hovedret">Hovedretter</Link>
        </li>
        <li key="desserter">
          <Link to="/dessert">Desserter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
