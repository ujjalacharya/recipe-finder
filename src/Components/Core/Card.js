import React from 'react'

const Card = ({recipe}) => {
 return (
  <div className="card mb-2" style={{width: "22rem", height: "99%"}}>
  <div className="card-header">
    <p className="card-text text-center">{recipe.label}</p>
  </div>
   {console.log(recipe)}
  <img className="card-img-top" src={recipe.image} alt="Recipe"/>
  <div className="card-body">
    <ol>
     {recipe.ingredients.map((ingredient, i) => (
      <li key={i}>{ingredient.text}</li>
     ))}
    </ol>
  </div>
  </div>
 )
}

export default Card
