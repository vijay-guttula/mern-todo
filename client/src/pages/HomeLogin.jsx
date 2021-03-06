import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppRouter from '../apis/AppRouter';
import { AppContext } from '../context/AppContext';

const HomeLogin = () => {
  const { setCredentials, setLoggedIn, setJustLoggedIn } =
    useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AppRouter.post('/auth/login', {
        email,
        password,
      });
      console.log(response);
      setCredentials({ email, password, token: response.data.accessToken });
      setLoggedIn(true);
      setJustLoggedIn(true);
      history.push('/todo');
    } catch (error) {
      setError('Incorrect email or password!');
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <div className='container'>
        <h1 className='font-monospace fw-lighte'>Hi,</h1>
        <p className='text-muted font-monospace fs-6 fw-lighter'>
          Login to see your list
        </p>
        <div className='form-div'>
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
            {error && <p className='text-danger font-monospace'>{error}</p>}
            <div className='mb-3 d-flex flex-row justify-content-evenly'>
              <input
                type='submit'
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
    </div>
  );
};

export default HomeLogin;
