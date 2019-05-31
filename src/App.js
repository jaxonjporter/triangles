import React from 'react'
import Triangles from './components/Triangles'
import { Route,} from 'react-router-dom'
import Particles from "react-particles-js";
import { particleParams, particleStyles } from "./styles/ParticleStyle";

const App = () => {
  return (
    <>
      <Particles params={particleParams} style={particleStyles} />
      <Route exact pact='/' component={Triangles} />
    </>
  
  )
}


export default App
