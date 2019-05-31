import React, { useEffect, } from 'react'
import { useSideInput, } from "../hooks/useSideInput";


const TriangleForm = ({ setTriangle }) => {
  const a = useSideInput('')
  const b = useSideInput('')
  const c = useSideInput('')

  const handleSubmit = (e) => {
    let triangle = [parseFloat(a.value), parseFloat(b.value), parseFloat(c.value)]
    e.preventDefault();
    setTriangle(triangle)
  }

  return (
  <form onSubmit={handleSubmit}>
    <input name='a' value={a} type='number' step='any' min='0.01' {...a} required />
    <input name='b' value={b} type='number' step='any' min='0.01' {...b} required />
    <input name='c' value={c} type='number' step='any' min='0.01' {...c} required />
    <button>Submit</button>
  </form>
  )
}

export default TriangleForm