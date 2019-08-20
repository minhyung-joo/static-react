import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import "./App.scss";

const HomePage = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link to="/about">To about page</Link>
    </header>
  </div>
);

export default HomePage;
