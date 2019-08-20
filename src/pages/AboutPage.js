import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import "./App.scss";

const AboutPage = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is a different page by the way.</p>
      <Link to="/">Back to home</Link>
    </header>
  </div>
);

export default AboutPage;
