import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeLogin, SignUp, ToDo } from './pages';

const App = () => {
  return (
    <>
      <div className='outer-most'>
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' component={HomeLogin} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/todo' component={ToDo} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
