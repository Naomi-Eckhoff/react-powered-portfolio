import React from 'react';
import About from '../About'
import Projects from '../Resume'
import Resume from '../Projects'

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
}

export default Category;