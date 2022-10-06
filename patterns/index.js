import React from 'react';
import Splitscreen from './layout/Splitscreen';
import RegularList from './layout/RegularList';
import Person from './layout/Person';
import { Modal } from './layout/Modal';
import { users } from './layout/userdata';

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
      <Modal />
    </>
  );
};

export default Patterns;
