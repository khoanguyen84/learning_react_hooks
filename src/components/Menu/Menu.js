import React from "react";
import { Link } from 'react-router-dom';
function Menu() {
    return (
        <div className="">
            <div className="list-group"role="tablist">
                <Link to={"/use-context"} className="list-group-item list-group-item-action active"role="tab" aria-controls="list-home">useContext</Link>
            </div>
        </div>
    )
}

export default Menu