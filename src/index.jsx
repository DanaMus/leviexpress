import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header/index';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <div className="container">
      <main></main>
    </div>
    <Footer />
  </>
);

render(<App />, document.querySelector('#app'));
