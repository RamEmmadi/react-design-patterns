import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
`;

const Pane = styled.div`
  flex:1;
`;

const Splitscreen = ({ children }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane>{left}</Pane>
      <Pane>{right}</Pane>
    </Container>
  );
};

export default Splitscreen;
