import React, {useState, } from 'react';
import TriangleForm from './components/TriangleForm'

const App = () => {
  const [triangle, setTriangle] = useState([])

  const renderTriangle = () => {
    validateTriangle(triangle)

    return (
      <TriangleForm setTriangle={setTriangle} />
      )
  }

  return (
    <>
    <h1>This will be triangles</h1>
    {renderTriangle()}
    </>
  );
}

const validateTriangle = (triangle) => {
  let tri = triangle.sort(function(a, b){return a-b})
  console.log(tri)
  if (tri[0]+tri[1] > tri[2]){
    console.log('valid')
    checkType(tri)
  } else {
    console.log('invalid')
  }
}

const checkType = (tri) => {
  if (tri[0] === tri[1] && tri[1] === tri[2]){
    console.log('equilateral')
  } else if (tri[0]**2 + tri[1]**2 === tri[2]**2){
    console.log('right')
  } 
}



export default App;
