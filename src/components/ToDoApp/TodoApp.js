import React, { useReducer, useRef } from "react";
import { ADD_JOB, REMOVE_JOB, SET_JOB } from "./TodoReducer/Constant";
import { initState, todoReducer } from './TodoReducer/TodoReducer';
// 1.initState
// const initState = {
//     job: '',
//     jobs: [
//         {
//             id: 1,
//             name: "Lau nhà"
//         },
//         {
//             id: 2,
//             name: "Quét nhà"
//         }
//     ]
// }
// 2. actions
// const SET_JOB = "set_job";
// const ADD_JOB = "add_job";
// const REMOVE_JOB = "remove_job";
// 3. useReducer
// const todoReducer = (state, action) => {
//     switch (action.type) {
//         case SET_JOB: {
//             return {
//                 ...state,
//                 job: action.playload
//             };
//         }
//         case ADD_JOB: {
//             const currenJobs = [...state.jobs];
//             currenJobs.sort((job_1, job_2) => job_2.id - job_1.id);
//             const currentMaxId = currenJobs[0].id;
//             const newJobs = [...state.jobs, {
//                 id: currentMaxId + 1,
//                 name: action.playload
//             }]
//             return {
//                 ...state,
//                 jobs: newJobs
//             };
//         }
//         case REMOVE_JOB: {
//             const newJobs = state.jobs.filter(job => job.id !== action.playload.id);
//             return {
//                 ...state,
//                 jobs: newJobs
//             }
//         }
//         default: {
//             throw new Error("invalid action!");
//         }
//     }
// }
// 4. dispatch
function TodoApp() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    const inputJob = useRef();
    const handleInputJob = (e) => {
        dispatch({
            type: SET_JOB,
            playload: e.target.value
        });
    }
    const handleAddJob = () => {
        dispatch({
            type: ADD_JOB,
            playload: job
        })
        dispatch({
            type: SET_JOB,
            playload: ""
        })
        inputJob.current.focus();
    }
    const handleRemoveJob = (item) => {
        dispatch({
            type: REMOVE_JOB,
            playload: item
        })
    }
    const { job, jobs } = state;
    return (
        <div className="container">
            <div className="d-flex">
                <input value={job} type="text" className="form-control"
                    onInput={handleInputJob}
                    ref={inputJob}
                />
                <button className="btn btn-warning btn-sm"
                    onClick={handleAddJob}
                >Add</button>
            </div>
            <ul>
                {
                    jobs.map((item) => (
                        <li key={item.id}>{item.name} 
                            <span className="ms-2" role="button" onClick={() => handleRemoveJob(item)}>&times;</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoApp;