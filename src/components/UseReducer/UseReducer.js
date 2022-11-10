import React, { useState, useReducer } from "react";

//  useState
// 1. init state
// 2. Actions

// useReducer
// 1. init State
// 2. Actions
// 3. useReducer
// 4. dispatch

// 1. initState
const initState = 0;

// 2. Actions
const DOWN_ACTION = 'down';
const UP_ACTION = 'up';

// 3. useReducer
const reducer = (state, action) => {
    switch (action) {
        case DOWN_ACTION:
            return state - 1    
        case UP_ACTION:
            return state + 1    
        default:
            break;
    }
}

function UseReducer(){
    const [count, dispatch] = useReducer(reducer, initState)
    return(
        <div className="container">
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    )
    // const [count, setCount] = useState(0)
    // return(
    //     <div className="container">
    //         <h1>{count}</h1>
    //         <button onClick={() => setCount(count - 1)}>Down</button>
    //         <button onClick={() => setCount(count + 1)}>Up</button>
    //     </div>
    // )
    
}

export default UseReducer;