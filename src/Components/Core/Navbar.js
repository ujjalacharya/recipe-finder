import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {MainContext} from "../../MainContext";

const Navbar = () => {

    const [showSearchBar, setShowSearchBar] = useContext(MainContext);

    const handleClick = () => {
        setShowSearchBar(!showSearchBar);
    }

    return (
        <div style={styles.mainDiv}>
            <li style={styles.listWrapper}>
                <ul>
                    <Link style={styles.link} to="/">Recipe Finder</Link>
                    </ul>
                <ul>
                    <i onClick={handleClick} style={styles.searchIcon} className="fa fa-search" aria-hidden="true"></i>
                </ul>
            </li>
        </div>
    )
};

const styles = {
    mainDiv: {
        background: "#434343",
        padding: "1rem",
        paddingTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
    },
    listWrapper: {
        display: "flex",
    },
    searchIcon:{
        color: "#ffff",
        cursor: "pointer"
    },
    link:{
        color: "#ffff",
        textDecoration: "none"
    }
}

export default Navbar;