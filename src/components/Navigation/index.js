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
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )

}

export default Navigation;