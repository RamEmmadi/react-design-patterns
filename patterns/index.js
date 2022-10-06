import React from 'react';
import Splitscreen from './layout/Splitscreen';

const LeftComponent = () => {
  return <h1 style={{ background: 'green' }}>LEFT</h1>;
};

const RightComponent = () => {
  return <h1 style={{ background: 'red' }}>RIGHT</h1>;
};

const Patterns = () => {
  return (
    <>
      Patterns
      <Splitscreen left={LeftComponent} right={RightComponent} />
    </>
  );
};

export default Patterns;
