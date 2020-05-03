import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/Signin";
import Profile from "../pages/Profile";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        {/* <Route exact path="/signin" component={Home} /> */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/news-category/:category" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
