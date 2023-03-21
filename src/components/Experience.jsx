import React from "react";
import styled from "styled-components";
import GppGoodIcon from "@mui/icons-material/GppGood";
import {
  GppGood,
  LocalShipping,
  NewReleases,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
import { mobile, tablet } from "../responsive";

const Experience = () => {
  return (
    <Container>
      <Title>We provide best customer experience</Title>

      <Section>
        <Box>
          <div>
            <Cover>
              <GppGood />
            </Cover>
            <Heading>Original Products</Heading>
            <p>
              We provide money back guarantee if the products are not original
            </p>
          </div>
        </Box>

        <Box>
          <div>
            <Cover>
              <SentimentSatisfiedAlt />
            </Cover>
            <Heading>Satisfication Guarantee</Heading>
            <p>Exchange the product you've purchased if it doesn't fit you</p>
          </div>
        </Box>

        <Box>
          <div>
            <Cover>
              <NewReleases />
            </Cover>
            <Heading>New Arrival Everyday</Heading>
            <p>We update our collections almost everyday</p>
          </div>
        </Box>

        <Box>
          <div>
            <Cover>
              <LocalShipping />
            </Cover>
            <Heading>Free & Fast Delivery</Heading>
            <p>We offer fast and free delivery for our customers</p>
          </div>
        </Box>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 20px;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  width: 500px;
  ${mobile({ width: "300px", fontSize: "1.2rem" })}
`;

const Section = styled.div`
  margin-top: 2rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  ${mobile({ gridTemplateColumns: "1fr" })};
  
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 300px;
  text-align: center;
  ${mobile({ textAlign: "center" })}
  ${tablet({ placeItems: "center" })}
`;

const Cover = styled.div`
  background-color: #c0c0c0;
  display: inline-flex;
  padding: 10px;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;

export default Experience;
