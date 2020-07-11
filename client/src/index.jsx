import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
  AboutUs,
  Footer,
  NavBar,
} from './components';

function App() {
  return (
    <section className="app">
      <NavBar />
      <Banner />      
      <AboutUs/>
      <Footer />

    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))