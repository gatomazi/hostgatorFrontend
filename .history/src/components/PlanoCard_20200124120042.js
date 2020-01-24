import React from "react";
import "./PlanoCard.scss";

import iconPlan from "../assets/icon.png";

const RecipeItem = ({ recipe = {}, handleSelectRecipe }) => (
  <Fragment>
    {recipe.title ? (
      <div className="col-sm-3 mt-4">
        <Link
          onClick={() => {
            handleSelectRecipe(recipe);
          }}
          to={`/recipe/`}
        >
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src={recipe.thumbnail}
              alt={recipe.title}
            />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">
                <strong>Ingredients: </strong>
                {recipe.ingredients}
              </p>
            </div>
          </div>
        </Link>
      </div>
    ) : (
      <h1>Recipe not Found</h1>
    )}
  </Fragment>
);

export default PlanoCard;
