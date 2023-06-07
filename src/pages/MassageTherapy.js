import React from 'react'
import { Container } from "../GlobalStyle"

const MassageTherapy = () => {
  return (
    <>
      <Container>
        <h1 className='service'>Massage Therapy</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={process.env.PUBLIC_URL + "/Massage_therapy.jpg"} alt="Massage Therapy"></img>
          </div>
          <div className='content'>
            <p>Massage therapy involves a range of techniques and styles, such as soft tissue massage, deep tissue massage, sports massage, trigger point therapy, or myofascial release.</p>
            <div>Benefits of massage therapy are:</div>
            <ul className='effect'>
              <li>Reduce stress and anxiety</li>
              <li>Restore muscle function</li>
              <li>Promote blood circulation</li>
              <li>Reduce pain</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MassageTherapy