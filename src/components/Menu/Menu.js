import React, { useState } from "react";
import { Link } from 'react-router-dom';
const menus = [
    {
        url: "/use-context",
        name: "useContext"
    },
    {
        url: "/use-reducer",
        name: "useReducer"
    },
    {
        url: "/todo-app",
        name: "Todo App"
    }
]
function Menu() {
    const [selectMenu, setSelectMenu] = useState("useContext");
    return (
        <div className="w-100">
            <div className="list-group" role="tablist">
                {
                    menus.map(menu => (
                        <Link key={menu.name} 
                            to={menu.url} 
                            onClick = { () => setSelectMenu(menu.name)}
                            className={`list-group-item list-group-item-action ${selectMenu === menu.name ? 'active' : '' } `} 
                            role="tab" aria-controls="list-home">
                                {menu.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu