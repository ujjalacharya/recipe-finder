import React from 'react'

const Card = ({recipe}) => {
 return (
  <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={recipe.image} alt="Recipe"/>
  <div className="card-body">
    <p className="card-text">{recipe.label}</p>
  </div>
  </div>
 )
}

export default Card
