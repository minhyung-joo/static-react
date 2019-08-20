import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import NotFound from "components/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
