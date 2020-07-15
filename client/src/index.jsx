import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
  AboutUs,
  NavBar,
  Product,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <NavBar />
      <Banner />      
      <AboutUs/>
      <Product />
      <Footer />
    </section>
  );

ReactDOM.render(<App />, document.getElementById('root'))