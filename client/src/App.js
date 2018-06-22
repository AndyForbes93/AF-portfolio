import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact-me" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
