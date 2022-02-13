import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'About',
      description: 'About Me'
    },
    {
      name: 'Project',
      description: 'My Projects'
    },
    {
      name: 'Resume',
      description: 'My Resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header />
      <main>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Navigation>
        <Footer />
      </main>
    </div>
  );
}

export default App;
