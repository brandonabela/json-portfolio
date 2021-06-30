import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Skills from './pages/Skills';
import Work from './pages/Work';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route path="/education" component={Education}></Route>
          <Route path="/work" component={Work}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route path="/portfolio/:id" component={PortfolioDetail}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
