import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {

    }
  ])

  return (
    <div>
      <Header />
      <Navigation>

      </Navigation>
      <Footer />
    </div>
  );
}

export default App;
