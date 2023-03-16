import React from "react";
import styled from "styled-components";
import FlareIcon from "@mui/icons-material/Flare";

const Detail = () => {
  return (
    <Content>
      <Heading>About Us</Heading>
      
        <Text>
          SHOP has clothes to elevate everyday life through lighthearted
          escapism. Whiles styles vary by season, all collections are guided by
          the ineffable sense of freedom that come with travel
        </Text>
      
    </Content>
  );
};

const Content = styled.div`
  padding: 80px 20px;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`;

const Small = styled.span`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  width: 20%;
  background-color: black;
`;

export default Detail;
