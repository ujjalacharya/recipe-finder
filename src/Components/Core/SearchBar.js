import React, { useState } from "react";
import axios from "axios";

const APP_ID = "5ae5db4c";
const APP_KEY = "b13d73947a5ec19f0c8e7c92f54e7bc0";

const SearchBar = ({ setRecipe }) => {
  const [veg, setVeg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const {
      target: { name, value }
    } = e;
    setVeg(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    fetchRecipe(veg);
  };

  const fetchRecipe = async veg => {
    const result = await axios.get(
      `https://api.edamam.com/search?q=${veg}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    setRecipe(result.data.hits);
    setLoading(false);
  };

  return (
    <form className="mt-2" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-10 col-sm-10 col-xs-10">
          <input
            type="text"
            placeholder="Name your vegetable here..."
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-2 col-sm-2 col-xs-2">
          <input
            type="submit"
            className="form-control"
            value={loading ? "Loading" : "Search"}
            disabled={loading}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
