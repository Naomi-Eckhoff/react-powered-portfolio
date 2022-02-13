import React, { useState } from 'react';
import './assets/css/style.css';
import Header from './components/Header';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'About Me'
    },
    {
      name: 'Projects',
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
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        <Category currentCategory={currentCategory}></Category>
      </main>
      <Footer />
    </div>
  );
}

export default App;
