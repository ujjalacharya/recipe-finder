import React, { useContext, useState } from "react";
import Layout from "../Core/Layout";
import SearchBar from "../Core/SearchBar";
import Card from "../Core/Card";
import { MainContext } from "../../MainContext";

import { useSpring, animated } from "react-spring";

const Home = () => {
  const [recipe, setRecipe] = useState([]);

  const [showSearchBar] = useContext(MainContext);
  const contentProps = useSpring({
    opacity: showSearchBar ? 1 : 0,
    marginTop: showSearchBar ? 0 : -15
  });
  return (
    <Layout>
      <animated.div style={contentProps}>
        <SearchBar setRecipe={setRecipe} />
      </animated.div>
      <div className="row">
        {recipe.length > 0 &&
          recipe.map(rec => {
            return (
              <div className="col-md-4">
                <Card recipe={rec.recipe} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default Home;
