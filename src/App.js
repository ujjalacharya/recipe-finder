import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Route/MainRouter"

const App = () => {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
}

export default App;
