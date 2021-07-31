import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, SignUp, ToDo } from './Pages';

const App = () => {
  return (
    <>
      <div className='outer-most'>
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
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
