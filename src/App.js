import React from "react";
//Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styles
import { GlobalStyle } from "./GlobalStyles";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/:movieId">
        <Movie />
      </Route>
      <Route path="/*">
        <NotFound />
      </Route>
    </Switch>
    <GlobalStyle />
  </Router>
);

export default App;
