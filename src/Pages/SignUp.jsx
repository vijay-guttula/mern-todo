import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppRouter from '../apis/AppRouter';
import { AppContext } from '../context/AppContext';

const SignUp = () => {
  const { setCredentials, setLoggedIn, setJustLoggedIn } =
    useContext(AppContext);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AppRouter.post('/auth/signup', {
        fullName,
        phoneNumber,
        username,
        email,
        password,
      });
      console.log(response);
      setCredentials({
        email,
        password,
        token: response.data.accessToken,
        userId: response.data.data._id,
      });
      setLoggedIn(true);
      setJustLoggedIn(true);
      history.push('/todo');
    } catch (error) {
      // window.alert('User with the email already exists');
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <div className='signup'>
      <div className='container'>
        <h1 className='font-monospace fw-lighter'>Hello again,</h1>
        <p className='text-muted font-monospace fs-6 fw-lighter'>
          Create an account to get started.
        </p>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='fullName' className='form-label font-monospace'>
              Full Name
            </label>
            <input
              className='form-control font-monospace'
              type='text'
              name='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='phoneNumber' className='form-label font-monospace'>
              Phone Number
            </label>
            <input
              className='form-control font-monospace'
              type='number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='username' className='form-label font-monospace'>
              Username
            </label>
            <input
              className='form-control font-monospace'
              type='text'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
            {isError && (
              <p className='text-danger font-monospace'>
                User with the email already exists, please login to continue.
              </p>
            )}
            <div className='form-text font-monospace fw-lighter'>
              P.S: We'll never share your email to anyone.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label font-monospace'>
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
