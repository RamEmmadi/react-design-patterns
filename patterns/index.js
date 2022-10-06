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
  const modalRefEle = React.useRef();

  const openHandlr = () => {
    modalRefEle.current.openModal();
  };

  const closeHandlr = () => {
    modalRefEle.current.closeModal();
  };

  return (
    <>
      Patterns
      <br />
      <button onClick={openHandlr}>OPEN MODAL</button>
      <br />
      <button onClick={closeHandlr}>CLOSE MODAL</button>
      <Modal ref={modalRefEle}>
        <div>
          <h3> Modal Title 1</h3>
        </div>
        <div>
          <p> Modal Body 1</p>
        </div>
      </Modal>
    </>
  );
};

export default Patterns;
