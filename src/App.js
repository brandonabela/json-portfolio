import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navigation from './components/Navigation';
import About from './pages/About';
import Education from './pages/Education';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollUp from './components/ScrollUp';
import Footer from './components/Footer';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />

        <div className="page">
          <Switch>
            <Route exact path="/" component={About}></Route>
            <Route path="/education" component={Education}></Route>
            <Route path="/work" component={Work}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route path="/portfolio/:id" component={PortfolioDetail}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>

        <ScrollUp />

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
