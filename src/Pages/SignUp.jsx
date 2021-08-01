import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppRouter from '../apis/AppRouter';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await AppRouter.post('/auth/signup', { email, password });
    console.log(response);
  };

  return (
    <div className='container'>
      <div className='login-form'>
        <h1 className='font-monospace fw-lighte'>Hello again,</h1>
        <p className='text-muted font-monospace fs-6 fw-lighter'>
          Create an account to get started.
        </p>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-3 d-flex flex-row justify-content-evenly'>
            <input
              type='submit'
              value='Create Account'
              className='btn btn-success font-monospace'
            />
            <Link to='/'>
              <button className='btn btn-danger font-monospace'>Go Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
