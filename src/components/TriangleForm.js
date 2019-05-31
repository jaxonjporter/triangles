import React from 'react'
import { useSideInput, } from "../hooks/useSideInput";
import styled from 'styled-components'


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
  <Form onSubmit={handleSubmit}>
    <label>Side A</label>
    <Input name='a' value={a} type='number' step='any' min='0.01' {...a} required />
    <label>Side B</label>
    <Input name='b' value={b} type='number' step='any' min='0.01' {...b} required />
    <label>Side C</label>
    <Input name='c' value={c} type='number' step='any' min='0.01' {...c} required />
    <button>Submit</button>
  </Form>
  )
}

const Form = styled.form`
`

const Input = styled.input`
  width: 20%;
  min-width: 200px;
  background-color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  padding: 5px;
  border: 2px solid #ededed;
  color: grey;
  margin: 10px;
  display: block;

  :focus {
    box-shadow: 0 0 0 2px #23a24d;
  }
`

export default TriangleForm