import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = (props) => {

    const [showSearchBar, setShowSearchBar] = useState(false);

    return (
        <MainContext.Provider value={[showSearchBar, setShowSearchBar]}>
            {props.children}
        </MainContext.Provider>
    )
}