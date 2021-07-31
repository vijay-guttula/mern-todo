import React from 'react';

const Login = () => {
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
            <div className='form-text text-mute font-monospace fw-lighter'>
              We'll never share your email to anyone.
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
          <div className='mb-3'>
            <input
              type='button'
              value='Login'
              className='btn btn-success font-monospace'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
