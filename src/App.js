import React, { useState, } from 'react'
import TriangleForm from './components/TriangleForm'
import styled from 'styled-components'

const App = () => {
  const [triangle, setTriangle] = useState([])

  return (
    <Container>
      <h1>Triangle Types</h1>
      <TriangleForm setTriangle={setTriangle} />
      {validateTriangle(triangle)}
    </Container>
  );
}

const validateTriangle = (triangle) => {
  let tri = triangle.sort(function(a, b){return a-b})
  if (tri[0]+tri[1] > tri[2]){
    return checkType(tri)
  } else if (triangle.length > 0) {
    return <p>Invalid Triangle</p>
  } else {
    return <p>Please enter sides</p>
  }
}

const checkType = (tri) => {
  if (tri[0] === tri[1] && tri[1] === tri[2]){
    return <p>equilateral</p>
  } else if (tri[0] === tri[1] || tri[0] === tri[2] || tri[1] === tri[2]){
    return <p>Isoscelese</p>
  } else if (tri[0]**2 + tri[1]**2 === tri[2]**2){
    return <p>right Scalene</p>
  } else {
    return <p>scalene</p>
  }
}

const Container = styled.div`
  padding: 0% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`



export default App
