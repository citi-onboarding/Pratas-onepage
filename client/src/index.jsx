import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
  AboutUs,
  Contact,
} from './components';

function App() {
  return (
    <section className="app">
      <Banner />
      <AboutUs/>
      <Contact />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))