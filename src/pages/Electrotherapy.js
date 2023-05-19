import React from 'react'
import { Container } from "../GlobalStyle"

const Electrotherapy = () => {
  return (
    <>
      <Container>
        <div className='service'>Electrotherapy</div>
        <ul className='effect'>
          <li>Reduce pain</li>
          <li>Reduce swelling</li>
          <li>Increase muscle stimulation</li>
          <li>Increase blood flow</li>
        </ul>
      </Container>
    </>
  )
}

export default Electrotherapy