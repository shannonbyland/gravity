import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" render={ (props) => <Auth {...props} title="Register" /> } />
      <Route path="/login" render={ (props) => <Auth {...props} title="Login" /> } />
    </Switch>
  </div>
);

export default App;
