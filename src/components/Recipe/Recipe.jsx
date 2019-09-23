import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getRecipe } from "../../util/contenful";
import "./Recipe.css";

function Recipe( {match} ) {
  const [recipe, setRecipe] = useState(undefined);
  console.log(match);
  useEffect(() => {
    getRecipe(match.params.id).then(entries => {
      setRecipe(entries.items[0]);
    });
  }, [match.params.id]);
  console.log(recipe);
  if (recipe) {
    const {amount, image, ingredients, instructions, title, type } = recipe.fields;
    console.log("Amount", amount);
    return (
      <div className="container">
        <h1 className="header"> {title} </h1>
        <h2 className="sub-header">Mængde: {amount}</h2>
        <h3 className="sub-sub-header">Ingredisenser:</h3>
        <div>{documentToReactComponents(ingredients)}</div>
        <h3 className="sub-sub-header">Instruktioner:</h3>
        <div>{documentToReactComponents(instructions)}</div>
      </div>
    );
  }
  return <p>Henter opskrift...</p>

}

export default Recipe;