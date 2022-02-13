import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';

function Category(props) {
  const { currentCategory } = props;

  if (currentCategory.name === 'About Me') {
    return (
      <About />
    )
  };
  if (currentCategory.name === 'Projects') {
    return (
      <Projects />
    )
  };
  if (currentCategory.name === 'Resume') {
    return (
      <Resume />
    )
  };
  if (currentCategory.name === 'Contact Information') {
    return (
      <Contact />
    )
  };
}

export default Category;