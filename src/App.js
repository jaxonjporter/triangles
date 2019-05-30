import React, {useState, } from 'react';
import TriangleForm from './components/TriangleForm'

const App = () => {
  const [triangle, setTriangle] = useState({})

  const renderTriangle = () => {
    console.log(triangle)

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

export default App;
