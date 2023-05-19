import React from 'react'
import { Container } from "../GlobalStyle"

const CuppingTherapy = () => {
  return (
    <>
    <Container>
      <h1 className='service'>Cupping Therapy</h1>
      <p>Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin to create suction.</p>
      <div>Benefits of cupping therapy are: </div>
      <ul className='effect'>
        <li>Increase blood flow</li>
        <li>Restore muscle function</li>
        <li>Reduce pain</li>
        <li>Reduce muscle tightness</li>
      </ul>
    </Container>
  </>
  )
}

export default CuppingTherapy