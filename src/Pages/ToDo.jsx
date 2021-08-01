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
    <div className='container'>
      <div className='todo'>
        {todos && <h1>Woah! You got quite a list</h1>}
        {!todos && <h1>Add down your tasks</h1>}
        {todos &&
          todos.map((todo, id) => {
            return (
              <div key={id}>
                <input type='checkbox' onChange={() => toggleTodo(id)} />
                <label htmlFor=''>{todo.text}</label>
                <br />
              </div>
            );
          })}
        <form onSubmit={addTodo}>
          <input
            type='text'
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
};

export default ToDo;
