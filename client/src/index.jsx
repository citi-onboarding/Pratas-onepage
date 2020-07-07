import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
  AboutUs,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <Banner />
      <AboutUs/>
      <Contact />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))