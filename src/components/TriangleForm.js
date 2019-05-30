import React, { useEffect, } from 'react'
import { useSideInput, } from "../hooks/useSideInput";


const TriangleForm = ({ setTriangle }) => {
  const a = useSideInput(1)
  const b = useSideInput(1)
  const c = useSideInput(1)

  const handleSubmit = (e) => {
    let triangle = {a: a.value, b: b.value, c: c.value}
    e.preventDefault();
    setTriangle({...triangle})
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