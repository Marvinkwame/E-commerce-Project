import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <Section>
      <Heading>Curated Picks</Heading>
      <Container>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Container>
    </Section>
  );
};

const Section = styled.div`
padding: 20px;
`

const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Products;
