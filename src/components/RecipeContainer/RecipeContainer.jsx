import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../../util/contenful";
import "./RecipeContainer.css";

function RecipeContainer( {match} ) {
  const [recipes, setRecipes] = useState([]);
  console.log(match);
  useEffect(() => {
    getRecipes(match.params.category).then(entries => {
      setRecipes(entries.items);
    });
  }, [match.params.category]);
  
  return <div className="container">{recipes.length > 0 ? recipes.map(recipe => <Link className="recipe" to={"/recipe/" + recipe.sys.id} key={recipe.sys.id}>{recipe.fields.title}</Link>): <p>Tilføj nogle opskrifter...</p>}</div>;
}

export default RecipeContainer;
