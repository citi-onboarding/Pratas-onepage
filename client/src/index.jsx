import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
  Products,
  AboutUs,
  Footer,
  NavBar,
  Testimonials,

  Contact,
} from './components';

function App() {
  return (
    <section className="app">
      <NavBar />
      <Banner />   
      <Products />   
      <AboutUs/>
      <Testimonials />
      <Contact />
      <Footer />

    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))