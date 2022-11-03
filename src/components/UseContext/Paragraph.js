import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext/ThemeContext';
function Paragraph() {
    const context = useContext(ThemeContext);
    return (
        <p className={`fst-italic ${context.theme}`}>Consequat sint laboris cillum do officia amet nulla enim. Et ullamco incididunt laboris nisi non pariatur ad consequat. Deserunt tempor laboris nostrud velit sit non sint occaecat Lorem anim.</p>
    )
}

export default Paragraph;