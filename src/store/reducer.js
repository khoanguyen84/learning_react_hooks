import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, MAKE_DONE_TODO } from "./constants"

const initState = {
    todoInput: '',
    todoList: [{
        id: 1,
        name: "Java",
        completed: false
    }]
}

const reducer = function (state, action) {
    switch (action.type) {
        case SET_TODO_INPUT: {
            return {
                ...state,
                todoInput: action.payload
            }
        }
        case ADD_TODO: {
            let lastId = 0
            if(state.todoList.length){
                let newTodoList = [...state.todoList];
                newTodoList.sort((todo_1, todo_2) => todo_2.id - todo_1.id)
                lastId = newTodoList[0].id
            }
            
            return {
                ...state,
                todoList: [...state.todoList, {id: lastId + 1, name: action.payload, completed: false}]
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id != action.payload.id)
            }
        }
        case MAKE_DONE_TODO: {
            return {
                ...state,
                todoList: state.todoList.map((item) => {
                    if (item.id === action.payload.id) {
                        item.completed = true
                    }
                    return item;
                })
            }
        }
        default: {
            throw new Error("Invalid action")
        }
    }
}

export { initState };
export default reducer;