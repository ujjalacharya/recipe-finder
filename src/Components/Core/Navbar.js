import React from "react";

const Navbar = () => {
    return(
        <div style={styles}>
            <li>
                <ul>Recipe Finder</ul>
            </li>
        </div>
    )
};

const styles = {
    background: "#434343",
    color: "#ffff",
    listStyle: "none",
    padding: "1rem",
    paddingTop: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
}

export default Navbar;