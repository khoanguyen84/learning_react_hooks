import { ADD_JOB, REMOVE_JOB, SET_JOB } from './Constant.js'

export const initState = {
    job: '',
    jobs: [
        {
            id: 1,
            name: "Lau nhà"
        },
        {
            id: 2,
            name: "Quét nhà"
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case SET_JOB: {
            return {
                ...state,
                job: action.playload
            };
        }
        case ADD_JOB: {
            const currenJobs = [...state.jobs];
            currenJobs.sort((job_1, job_2) => job_2.id - job_1.id);
            const currentMaxId = currenJobs[0].id;
            const newJobs = [...state.jobs, {
                id: currentMaxId + 1,
                name: action.playload
            }]
            return {
                ...state,
                jobs: newJobs
            };
        }
        case REMOVE_JOB: {
            const newJobs = state.jobs.filter(job => job.id !== action.playload.id);
            return {
                ...state,
                jobs: newJobs
            }
        }
        default: {
            throw new Error("invalid action!");
        }
    }
}
