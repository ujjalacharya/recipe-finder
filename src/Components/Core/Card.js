import React from "react";

const Card = React.memo(({ recipe }) => {
  return (
    <a target="_blank" rel="noopner noreferer" href={recipe.url}>
      <div className="card mb-2" style={{ width: "22rem", height: "99%" }}>
        <div className="card-header">
          <p className="card-text text-center">{recipe.label}</p>
        </div>
        <img className="card-img-top" src={recipe.image} alt="Recipe" />
        <div className="card-body">
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
});
export default Card;
