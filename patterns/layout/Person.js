import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  
  border: 1px solid;

`;

const Person = ({ person }) => {
  const { name, email, phone } = person;
  return (
    <Container>
      <h1>{name}</h1>
      <strong>{email}</strong>
      <p>{phone}</p>
    </Container>
  );
};

export default Person;
