import React, { useContext } from "react";
import Layout from "../Core/Layout";
import SearchBar from "../Core/SearchBar";
import { MainContext } from "../../MainContext";

import { useSpring, animated } from 'react-spring';


const Home = () => {

    const [showSearchBar] = useContext(MainContext);
    const contentProps = useSpring({
        opacity: showSearchBar ? 1 : 0,
        marginTop: showSearchBar ? 0 : -15
    })
    return (
        <Layout>
            <animated.div style={contentProps}>
                <SearchBar />
            </animated.div>
        </Layout>
    )
};

export default Home;