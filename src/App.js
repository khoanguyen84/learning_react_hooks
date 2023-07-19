import { useReducer } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { reducer, initState, SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, MAKE_DONE_TODO } from './store'


function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  const handleInput = (e) => {
    dispatch({ type: SET_TODO_INPUT, payload: e.target.value })
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: state.todoInput })
    dispatch({ type: SET_TODO_INPUT, payload: '' })
  }

  const handleRemoveTodo = (todo) => {
    if (window.confirm(`Are you sure to remove job ${todo}?`)) {
      dispatch({ type: REMOVE_TODO, payload: todo })
    }
  }

  const handleMakeDoneTodo = (todo) => {
    dispatch({ type: MAKE_DONE_TODO, payload: todo })
  }
  
  return (
    <form className='ms-5 w-50'>
      <div className='d-flex'>
        <input className='form-control' value={state.todoInput} type="text" onInput={handleInput} />
        <button className='btn btn-warning' onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <ul className='list-group'>
          {
            state.todoList.map((todo) => (
              <li className='d-flex justify-content-between list-group-item' key={todo.id}>
                <div>
                  {todo.name}
                  {todo.completed ? <span class="ms-2 badge bg-success">Completed</span> : <span class="ms-2 badge bg-secondary">Inprogess</span>}
                </div>
                <div>
                  {
                    !todo.completed && <span role='button' className='text-primary fw-bolder me-2'
                      onClick={() => handleMakeDoneTodo(todo)}
                    >&#10003;</span>
                  }
                  <span role='button' className='text-danger fw-bolder'
                    onClick={() => handleRemoveTodo(todo)}
                  >&times;</span>

                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </form>
  );
}

export default App;
