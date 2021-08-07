import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { loggedIn } = useContext(AppContext);

  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <a href='/' className='navbar-brand'>
        Todo
      </a>
      <div className='d-flex flex-row justify-content-end ms-auto'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a
              href='https://github.com/vijay-guttula/mern-todo'
              className='nav-link'
            >
              Github
            </a>
          </li>
          {loggedIn && (
            <li className='nav-item logout-item'>
              <a href='/' className='nav-link'>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
