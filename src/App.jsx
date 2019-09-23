import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import RecipeContainer from './components/RecipeContainer/RecipeContainer'
import NavMenu from './components/NavMenu/NavMenu'
import Recipe from './components/Recipe/Recipe'

function App() {
  return (
    <Router>
      <NavMenu />
        <Route exact path="/:category?" component={RecipeContainer} />
        <Route path="/recipe/:id" component={Recipe} />
    </Router>
  );
}

export default App;
