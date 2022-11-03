import React from "react";
import { ThemeProvider } from './ThemeContext/ThemeContext'
import UseContext from "./UseContext";

function MainUseContext() {
    return (
        <ThemeProvider>
            <UseContext />
        </ThemeProvider>
    )
}

export default MainUseContext