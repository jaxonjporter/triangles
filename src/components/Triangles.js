import React, { useState, } from 'react'
import TriangleForm from './TriangleForm'
import styled, { css, } from 'styled-components';
import equilateral from '../images/equilateral.png'
import isoscelese from '../images/isoscelese.png'
import scalene from '../images/scalene.png'
import rightscalene from '../images/rightscalene.png'

const Triangles = () => {
  const [triangle, setTriangle] = useState([])

  return (
    <Container>
      <Center>
        <DivExplain>
          <Title>Triangle Type Calculator</Title>
          <SubTitle>This calculator will determine the type of triangle given three sides. Enter the side lengths in the boxes below.</SubTitle>
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
    return determineType(tri)
  } else if (triangle.length > 0) {
    return <h1>Invalid triangle</h1>
  } else {
    return <h1>Please enter side lengths</h1>
  }
}

const determineType = (tri) => {
  if (tri[0] === tri[1] && tri[1] === tri[2]){
    return (
      <>
        <h1>Equilateral</h1>
        <Img src={equilateral} />
        <p>An equilateral triangle is defined by all three sides being the same length</p>
      </>
    )
  } else if (tri[0] === tri[1] || tri[0] === tri[2] || tri[1] === tri[2]){
    if (tri[0]**2 + tri[1]**2 === tri[2]**2){
      return (
        <>
          <h1>Right Isoscelese</h1>
          <p>A right Isoscelese triangle has two equal side lengths, and one angle of 90 degrees</p>
        </>  
      )
    } else {
      return (
      <>
        <h1>Isoscelese</h1>
        <Img src={isoscelese} />
        <p>An isoscelese triangle is defined by having 2 sides the same length</p>
      </>
      )
    }
  } else {
    if (tri[0]**2 + tri[1]**2 === tri[2]**2){
      return (
        <>
          <h1>Right Scalene</h1>
          <Img src={rightscalene} />
          <p>A right scalene triangle has all different side lengths and one angle of 90 degrees</p>
        </>
      )
    } else {
      return (
        <>
          <h1>Scalene</h1>
          <Img src={scalene} />
          <p>A scalene triangle is defined by having all different side lengths</p>
        </>
      )
    }
  }
}

const sizes = {
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
  margin: 0 10%;
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
  min-height: 350px;
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
  margin: 40px 5px 5px 5px;
  text-align: center;

  ${media.tablet`
    margin-top: 0px;
  `}


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

const Img = styled.img`
  width: 200px;
`

const Title = styled.h1`
  margin: 10px 0 0 0;
`
const SubTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 5px;
`

export default Triangles