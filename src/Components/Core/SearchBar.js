import React from "react";

const SearchBar = () => {
    return (
        <form className="mt-2">
            <div className="form-row">
                <div className="form-group col-md-10">
                    <input type="text" placeholder="Name your vegetable here..." className="form-control" />
                </div>
                <div className="form-group col-md-2">
                    <input type="submit" className="form-control" value="Search"/>
                </div>
            </div>
        </form>
    )
};

export default SearchBar;