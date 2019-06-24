import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Route/MainRouter"
import { MainProvider } from "./MainContext"

const App = () => {
    return (
        <MainProvider>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </MainProvider >
    );
}

export default App;
