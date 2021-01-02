import React , { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Footer from './components/layouts/Footer';
const App=()=> {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
