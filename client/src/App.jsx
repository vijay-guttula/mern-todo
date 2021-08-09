import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import { HomeLogin, SignUp, ToDo } from './pages';
import { Navbar, Footer } from './components';

const App = () => {
  return (
    <>
      <AppContextProvider>
        <Navbar />
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' component={HomeLogin} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/todo' component={ToDo} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </AppContextProvider>
    </>
  );
};

export default App;
