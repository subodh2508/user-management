import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import SignUp from './components/SignUp';
// import Users from './components/Users';
import NotFound from './components/NotFound';
import './App.css';


function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
            <h1>User Management App</h1>
          </header>
        </div>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/sign-up' component={SignUp}></Route>
        <Route exact path='/users' component={require('./components/Users').default}></Route>
        <Route path='*' component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
