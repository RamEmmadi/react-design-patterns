import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  width:100%;
  height:100%;
  left:0;
  right:0;
  overflow:auto;
  background-color:rgba(0,0,0,0.5);
`;

const ModalContainer = styled.div`
  margin: 0 auto;
  width: 70%;
`;

const ModalHeading = styled.div`
  background-color:white;
  padding: 20px;
  border-bottom: 2px solid black;
`;

const ModalBody = styled.div`
  background-color:white;
  padding: 20px;
  min-height: 40%;
`;

export const Modal = React.forwardRef((props, ref) => {
  const [showModal, setShowModal] = React.useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  React.useImperativeHandle(ref, () => ({
    openModal: openModal,
    closeModal: closeModal,
  }));

  return (
    <>
      {showModal && (
        <ModalBackground onClick={() => setShowModal(false)}>
          <ModalContainer>
            <ModalHeading>
              Modal Heading
              <button onClick={() => setShowModal(false)}>HIDE</button>
            </ModalHeading>
            <ModalBody>Modal Body</ModalBody>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
});
