import React from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import * as Page from "./docs-pages";

const Docs = () => {
  return (
    <div className="docs-page">
      <aside className="docs-sidebar">
        <ul>
          <li>
            <NavLink to="/docs/control">Control</NavLink>
          </li>
          <li>
            <NavLink to="/docs/field">Field</NavLink>
          </li>
          <li>
            <NavLink to="/docs/form">Form</NavLink>
          </li>
        </ul>
      </aside>
      <main className="docs-container">
        <div className="page-transition-inner">
          <Switch>
            <Route path="/docs/control" component={Page.Control} />
            <Route path="/docs/field" component={Page.Field} />
            <Route path="/docs/form" component={Page.Form} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Docs;
