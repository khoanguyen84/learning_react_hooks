import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext/ThemeContext'
import Content from "./Content";

function UseContext() {
    const context = useContext(ThemeContext);
    return (
        <div className="container">
            <button onClick={context.handleChangeTheme}>Toogle theme</button>
            <Content />
        </div>
    )
}

export default UseContext;