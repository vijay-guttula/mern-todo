import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppRouter from '../apis/AppRouter';
import { AppContext } from '../context/AppContext';

const ToDo = () => {
  const [todos, setTodos] = useState();
  const [newTodoText, setNewTodoText] = useState('');
  const { credentials, justLoggedIn, setJustLoggedIn } = useContext(AppContext);
  let history = useHistory();

  if (credentials) {
    var { token } = credentials;
  } else {
    window.alert('Credentials missing, Login to get started');
    history.push('/');
  }

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodoText) return;
    if (todos.length === 0) {
      console.log('lenght is 0');
      setTodos([{ checked: false, text: newTodoText }]);
    } else {
      setTodos([
        ...todos,
        {
          checked: false,
          text: newTodoText,
        },
      ]);
    }
    console.log('just added', todos);
    setNewTodoText('');
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
        const response = await AppRouter.get('/todos', {
          headers: {
            'x-access-token': token,
          },
        });
        console.log(response);
        setTodos(response.data.todos.todos);
      } catch (error) {
        console.log(error);
      }
    };
    const updateBackendTodos = async () => {
      console.log('before backend', todos);
      try {
        const response = await AppRouter.post(
          '/todos',
          {
            todos,
          },
          {
            headers: {
              'x-access-token': token,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    // right calls
    if (justLoggedIn) {
      fetchData();
      setJustLoggedIn(false);
    } else {
      updateBackendTodos();
    }
  }, [todos]);

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
                <div className='todo-elements font-monospace' key={id}>
                  {todo.checked && (
                    <div className='todo-element'>
                      <input
                        className='form-check-input ms-5'
                        type='checkbox'
                        onChange={() => toggleTodo(id)}
                        checked={true}
                      />
                      <label
                        className='form-label ms-2 strikethrough'
                        htmlFor=''
                      >
                        {todo.text}
                      </label>
                    </div>
                  )}
                  {!todo.checked && (
                    <div className='todo-element'>
                      <input
                        className='form-check-input ms-5'
                        type='checkbox'
                        onChange={() => toggleTodo(id)}
                      />
                      <label className='form-label ms-2 ' htmlFor=''>
                        {todo.text}
                      </label>
                    </div>
                  )}

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
