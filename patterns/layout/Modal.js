import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  width:100%;
  height:100%;
  left:0;
  right:0;
  overflow:auto;
  background-color:rgba(0,0,0,0.5)
`;

const ModalHeading = styled.div`
  background-color:white;
  margin: 10% auto;
  padding: 20px;
  width: 50%
  borderBotttom: 2px solid;
`;

const ModalBody = styled.div`
  background-color:white;
  margin: 10% auto;
  padding: 20px;
  width: 50%
`;

export const Modal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <ModalBackground onClick={() => setShowModal(false)}>
          <ModalHeading>
            Modal Heading
            <button onClick={() => setShowModal(false)}>HIDE</button>
          </ModalHeading>
          <ModalBody>Modal Body</ModalBody>
        </ModalBackground>
      )}
    </>
  );
};
