import React from "react";
import { HashRouter, Switch, NavLink, Route } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/img/formula-icon.svg";
import Home from "./pages/Home";
import Docs from "./pages/Docs";

const App = () => {
  return (
    <HashRouter basename="/">
      <nav className="app-navbar">
        <Logo className="app-navbar-logo" width={28} height={28} />
        <ul className="app-navbar-menu">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs">Docs</NavLink>
          </li>
        </ul>
      </nav>
      <div className="app-container">
        <Switch>
          <Route path="/docs" component={Docs} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <footer className="app-footer"></footer>
    </HashRouter>
  );
};

export default App;
