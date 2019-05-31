import React, { useEffect, } from 'react'
import { useSideInput, } from "../hooks/useSideInput";


const TriangleForm = ({ setTriangle }) => {
  const a = useSideInput('')
  const b = useSideInput('')
  const c = useSideInput('')

  const handleSubmit = (e) => {
    let triangle = [parseInt(a.value), parseInt(b.value), parseInt(c.value)]
    e.preventDefault();
    setTriangle(triangle)
  }

  return (
  <form onSubmit={handleSubmit}>
    <input name='a' value={a} type='number' min='1' {...a} required />
    <input name='b' value={b} type='number' min='1' {...b} required />
    <input name='c' value={c} type='number' min='1' {...c} required />
    <button>Submit</button>
  </form>
  )
}

export default TriangleForm