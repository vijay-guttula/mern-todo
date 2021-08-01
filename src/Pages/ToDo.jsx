import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppRouter from '../apis/AppRouter';
import { AppContext } from '../context/AppContext';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const { credentials } = useContext(AppContext);
  let history = useHistory();

  if (!credentials) {
    window.alert('Login to get started');
    history.push('/');
  }

  const updateBackendTodos = async () => {
    try {
      const response = await AppRouter.post('/todos', {
        todos,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodoText) return;
    setTodos([...todos, { checked: false, text: newTodoText }]);
    setNewTodoText('');
    updateBackendTodos();
  };

  const toggleTodo = (index) => {
    const newTodoList = [...todos];
    newTodoList[index].checked = !newTodoList[index].checked;
    setTodos(newTodoList);
  };

  // to fetch the todos data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AppRouter.get('/todos');
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    // fetchData()
  }, []);

  return (
    <div className='todo-container font-monospace'>
      <div className='container'>
        <div className='todo-header fw-lighter'>
          {todos && (
            <h1 className='mb-5 text-center'>Woah! You got quite a list</h1>
          )}
          {!todos && <h1 className='mb-5 text-center'>Add down your tasks</h1>}
        </div>

        <div className='form-div'>
          <form
            onSubmit={addTodo}
            className='d-flex flex-row justify-content-center'
          >
            <div className='mb-3'>
              <input
                className='form-control font-monospace'
                type='text'
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
              />
            </div>
            <button className='todo-add btn btn-danger ms-4' type='submit'>
              Add
            </button>
          </form>
        </div>

        <div className='container todo'>
          {todos &&
            todos.map((todo, id) => {
              return (
                <div className='todo-element font-monospace' key={id}>
                  <input
                    className='form-check-input ms-5'
                    type='checkbox'
                    onChange={() => toggleTodo(id)}
                  />
                  <label className='form-label ms-2' htmlFor=''>
                    {todo.text}
                  </label>
                  <br />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
