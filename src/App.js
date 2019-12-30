import React from 'react';
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './views/Homepage';
import About from './views/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
