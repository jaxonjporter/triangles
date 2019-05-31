import React from 'react'
import Triangles from './components/Triangles'
import { Route, Switch } from 'react-router-dom'
import Particles from "react-particles-js";
import { particleParams, particleStyles } from "./styles/ParticleStyle";

const App = () => {
  return (
    <>
    <Particles params={particleParams} style={particleStyles} />
    <Switch>
      <Route exact pact='/triangles' component={Triangles} />
      <Route exact pact='/purpose' component={Triangles} />
      <Route exact pact='/home' component={Triangles} />
    </Switch>
    </>
  
  )
}


export default App
