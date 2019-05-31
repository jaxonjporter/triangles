import React, {useState, } from 'react';
import TriangleForm from './components/TriangleForm'

const App = () => {
  const [triangle, setTriangle] = useState([])

  const renderTriangle = () => {
    return (
      <TriangleForm setTriangle={setTriangle} />
      )
  }

  return (
    <>
    <h1>This will be triangles</h1>
    {renderTriangle()}
    {validateTriangle(triangle)}
    </>
  );
}

const validateTriangle = (triangle) => {
  let tri = triangle.sort(function(a, b){return a-b})
  if (tri[0]+tri[1] > tri[2]){
    return checkType(tri)
  } else {
    console.log('invalid')
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



export default App;
