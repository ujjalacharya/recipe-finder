import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
    return(
        <>
            <Navbar />
            <div className="container">
                <div className={props.className}>
                    {props.children}
                </div>
            </div>
        </>
    )
};

export default Layout;