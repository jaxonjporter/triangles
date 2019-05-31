import React from 'react'
import Triangles from './components/Triangles'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Switch>
      <Route exact pact='/triangles' component={Triangles} />
      <Route exact pact='/purpose' component={Triangles} />
      <Route exact pact='/home' component={Triangles} />
    </Switch>
    </>
  
  )
}


export default App
