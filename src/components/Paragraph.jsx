import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/Provider";
function Paragraph(){
    const consumber = useContext(ThemeContext)
    return (
        <div>
            <p className={consumber.theme}>Magna cillum ex fugiat aliquip eu anim voluptate enim ex. Tempor culpa sunt culpa incididunt nulla quis ea labore deserunt. Cillum nulla culpa veniam ut ipsum commodo do nulla commodo consectetur.</p>
        </div>
    )
}

export default Paragraph;