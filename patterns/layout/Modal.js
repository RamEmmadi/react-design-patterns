import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  width:100%;
  height:100vh;
  left:0;
  right:0;
  overflow:auto;
  background-color:rgba(0,0,0,0.5);
  z-index:1050;
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

  const [heading, body] = props.children;

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
              {heading}
              <button onClick={() => setShowModal(false)}>HIDE</button>
            </ModalHeading>
            <ModalBody>{body}</ModalBody>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
});
