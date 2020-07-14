import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
  AboutUs,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <Banner />
      <AboutUs/>
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))