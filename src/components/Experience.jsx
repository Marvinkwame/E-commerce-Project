import React from "react";
import styled from "styled-components";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { GppGood, LocalShipping, NewReleases, SentimentSatisfiedAlt } from "@mui/icons-material";

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
            <p>
            Exchange the product you've purchased if it doesn't fit you
            </p>
          </div>
        </Box>

        <Box>
          <div>
            <Cover>
              <NewReleases />
            </Cover>
            <Heading>New Arrival Everyday</Heading>
            <p>
                We update our collections almost everyday
            </p>
          </div>
        </Box>

        <Box>
          <div>
            <Cover>
              <LocalShipping />
            </Cover>
            <Heading>Free & Fast Delivery</Heading>
            <p>
                We offer fast and free delivery for our customers
            </p>
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
`

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
`;

const Box = styled.div`
  display: grid;
  row-gap: 9rem;
`;
const Cover = styled.div`
  background-color: #c0c0c0;
  display: inline-flex;
  padding: 5px;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h3`
    font-weight: 600;
    font-size: 1.5rem;
`

export default Experience;
