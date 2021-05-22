import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import Reservation from './pages/Reservation';

const App = () => (
  <Router>
    <Header />
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Domů</Link>
          </li>
          <li>
            <Link to="/reservation">Rezervace</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));
