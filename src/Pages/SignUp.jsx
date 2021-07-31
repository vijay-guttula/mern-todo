import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='container'>
      <div className='login-form'>
        <h1 className='font-monospace fw-lighte'>Hello again,</h1>
        <p className='text-muted font-monospace fs-6 fw-lighter'>
          Create an account to get started.
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
            <div className='form-text text-mute font-monospace fw-lighter'>
              P.S: We'll never share your email to anyone.
            </div>
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
            <Link to='/'>
              <button className='btn btn-primary font-monospace'>
                Create Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
