import { EmailOutlined, Mail } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Newsletter = () => {
  return (
    <Container>
      <Title>
        Subscribe to our newsletter to get update to our lastest collections
      </Title>
      <Desc>Get 20% off on your first order by subscribing to our newsletter</Desc>

      <InputContainer>
        <Form>
          <EmailOutlined color="primary" />
          <Input type="text" placeholder="Enter your email" />
        </Form>

        <Button>Subscribe</Button>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${tablet({ height: "50vh" })}
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "1.3rem", textAlign: "center" })};
  ${tablet({ fontSize: "1.3rem", textAlign: "center" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ fontSize: "1rem", textAlign: "center" })}
  ${tablet({ fontSize: "1.3rem", textAlign: "center" })}
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  ${mobile({ flexDirection: "column" })}
`;

const Form = styled.form`
  background-color: white;
  color: #fff;
  padding: 0.5rem 0.35rem 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  width: 250px;
  border: 2px solid #fff;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
    background-color: #01061a;
    color: white;
    padding: .5rem 1.5rem;
    border-radius: .2rem;
    cursor: pointer;
    border: none;
`

export default Newsletter;
