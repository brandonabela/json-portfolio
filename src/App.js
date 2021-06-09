import React from 'react';
import './App.css';

import Nav from './components/Nav'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Education from './pages/Education'
import Work from './pages/Work'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import PortfolioDetail from './pages/PortfolioDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/education" component={Education}></Route>
          <Route path="/work" component={Work}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route path="/portfolio/:id" component={PortfolioDetail}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
