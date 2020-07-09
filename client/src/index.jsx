import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
} from './components';

function App() {
  return (
    <section className="app">
      <Banner />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))