import React from 'react';

const RegularList = ({ list, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {list.map((listItem, i) => (
        <ItemComponent key={i} {...{ [resourceName]: listItem }} />
      ))}
    </>
  );
};

export default RegularList;
