import React from 'react';

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li
            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
              }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
            >
            </span>
          </li>
        ))}
        <li>
          <a data-testid="about" href="#about-me" onClick={() => setContactSelected(false)}>
            About Me
          </a>
        </li>
        <li>
          <a href="#work">
            My Work
          </a>
        </li>
        <li>
          <a href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )

}

export default Navigation;