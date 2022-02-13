import React from 'react';

function Category(props) {
  const { currentCategory } = props;
  return (
    <div>
      <h1>{currentCategory.name}</h1>
    </div>
  )

}

export default Category;