import React from 'react'
import { Container } from "../GlobalStyle"

const ManualTherapy = () => {
  return (
    <>
      <Container>
        <h1 className='service'>Manual Therapy</h1>
        <div className='image_wrapper'>
        <img src={process.env.PUBLIC_URL + "manual_therapy.jpg"} alt="Manual Therapy"></img>
        </div>
        <p>Manual therapy consists of a wide range of hands-on interventions including soft tissue mobilizations, joint mobilizations, manipulations or muscle energy techniques.</p>
        <p>Manual therapy is used in conjunction with an active rehabilitation program to become effective in optimizing the rehabilitation process and return to function.</p>
        <div>Benefits of manual therapy are:</div>
        <ul className='effect'>
          <li>Restore joint range of motion</li>
          <li>Restore muscle function</li>
          <li>Reduce pain</li>
        </ul>
      </Container>
    </>
  )
}

export default ManualTherapy