import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { mobile, tablet } from '../responsive'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
  ${tablet({ flexDirection: "column" })}
`;

export default Categories