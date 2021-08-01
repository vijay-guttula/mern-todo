import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const HomeLogin = () => {
  const { credentials } = useContext(AppContext);
  if (credentials) {
    const { email, password } = credentials;
    console.log(email, password);
  }

  return (
    <div className='container'>
      <div className='login-form'>
        <h1 className='font-monospace fw-lighte'>Hi,</h1>
        <p className='text-muted font-monospace fs-6 fw-lighter'>
          Login to see your list
        </p>
        <form>
          <div className='mb-3'>
            <label
              htmlFor='email'
              className='form-label text-mute font-monospace'
            >
              Email
            </label>
            <input
              name='email'
              type='email'
              className='form-control font-monospace'
            />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='password'
              className='form-label text-mute font-monospace'
            >
              Password
            </label>
            <input
              name='password'
              type='password'
              className='form-control font-monospace'
            />
          </div>
          <div className='mb-3 d-flex flex-row justify-content-evenly'>
            <input
              type='button'
              value='Login'
              className='btn btn-success font-monospace'
            />
            <Link to='/signup'>
              <button className='btn btn-primary font-monospace'>
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeLogin;
