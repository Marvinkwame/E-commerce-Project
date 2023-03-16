import React from 'react'
import styled from 'styled-components';

const Note = () => {
  return (
    <Container>Sign Up and GET 20% OFF your first order.</Container>
  )
}

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export default Note