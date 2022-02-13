import React, { useState } from 'react';
import Navigation from '../Navigation';

function Header() {
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
    <header>
      <h1>Naomi Eckhoff</h1>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
    </header>
  )

}

export default Header;