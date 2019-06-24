import React, { useContext } from "react";
import Layout from "../Core/Layout";
import SearchBar from "../Core/SearchBar";
import { MainContext } from "../../MainContext"

const Home = () => {
    const [showSearchBar, setShowSearchBar] = useContext(MainContext);
    return (
        <Layout>
            {showSearchBar && (
                <SearchBar />
            )}
        </Layout>
    )
};

export default Home;