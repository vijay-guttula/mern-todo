import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import { HomeLogin, SignUp, ToDo } from './pages';

const App = () => {
  return (
    <>
      <AppContextProvider>
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
      </AppContextProvider>
    </>
  );
};

export default App;
