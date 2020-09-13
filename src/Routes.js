import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";
import { Switch, Route, Redirect } from "react-router";

const Routes = () => {
  const [User] = useState(localStorage.getItem("User") || null);
  useEffect(() => {
    localStorage.getItem("User");
  });

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      {User ? (
        <Route path="/movies">
          <Movies />
        </Route>
      ) : (
        <Redirect from="/movies" to="/" />
      )}
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
