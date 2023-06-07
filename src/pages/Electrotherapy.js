import React from 'react'
import { Container } from "../GlobalStyle"

const Electrotherapy = () => {
  return (
    <>
      <Container>
        <h1 className='service'>Electrotherapy</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={process.env.PUBLIC_URL + "/Electrotherapy.jpg"} alt="Electrotherapy"></img>
          </div>
          <div className='content'>
            <p>Electrotherapy is the use of electrical energy as a medical treatment. This includes interferential therapy, magnetic field therapy, or therapeutic ultrasound.</p>
            <div>Benefits of modalities are:</div>
            <ul className='effect'>
              <li>Reduce pain</li>
              <li>Reduce swelling</li>
              <li>Increase muscle stimulation</li>
              <li>Increase blood flow</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Electrotherapy