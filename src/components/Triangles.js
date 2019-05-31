import React, { useState, } from 'react'
import TriangleForm from './TriangleForm'
import styled, { css, } from 'styled-components';

const Triangles = () => {
  const [triangle, setTriangle] = useState([])

  return (
    <Container>
      <Center>

        <DivExplain>
          <h1>Triangle Type Calculator</h1>
          <h3>This calculator will determine the type of triangle you have given the three sides. Enter the side lengths in the boxes below.</h3>
        </DivExplain>
      </Center>
      <Center>

      <DivForm>
        <TriangleForm setTriangle={setTriangle} />
      </DivForm>
      <DivForm>
        {validateTriangle(triangle)}
      </DivForm>
      </Center>
    </Container>
  );
}

const validateTriangle = (triangle) => {
  let tri = triangle.sort(function(a, b){return a-b})
  if (tri[0]+tri[1] > tri[2]){
    return checkType(tri)
  } else if (triangle.length > 0) {
    return <h1>Invalid Triangle</h1>
  } else {
    return <h1>Please enter sides</h1>
  }
}

const checkType = (tri) => {
  if (tri[0] === tri[1] && tri[1] === tri[2]){
    return <h1>equilateral</h1>
  } else if (tri[0] === tri[1] || tri[0] === tri[2] || tri[1] === tri[2]){
    if (tri[0]**2 + tri[1]**2 === tri[2]**2){
      return <h1>right Isoscelese</h1>
    } else {
      return <h1>Isoscelese</h1>
    }
  } else {
    if (tri[0]**2 + tri[1]**2 === tri[2]**2){
      return <h1>right Scalene</h1>
    } else {
      return <h1>scalene</h1>
    }
  }
}

const sizes = {
  desktop: 992,
  tablet: 1068,
  phone: 606,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const Container = styled.div`
  margin: 0% 10%;
  font-family: 'Roboto', sans-serif;
`

const DivForm = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px #7f7f7f;
  border-radius: 5px;
  margin: 5px;
  min-height: 50vh;
  text-align: center;


  ${media.tablet`
    width: 100%;
  `}
`
const DivExplain = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px #7f7f7f;
  border-radius: 5px;
  min-height: 10vh;
  margin: 0px 5px 5px 5px;
  text-align: center;


`
const Center = styled.div`
  display: flex;
  align-items: center;

  ${media.tablet`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`}
`


export default Triangles