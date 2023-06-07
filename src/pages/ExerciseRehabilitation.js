import React from 'react'
import { Container } from "../GlobalStyle"

const ExerciseRehabilitation = () => {
  return (
    <>
      <Container>
        <h1 className='service'>Exercise Rehabilitation</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={process.env.PUBLIC_URL + "/Exercise_therapy.jpg"} alt="Exercise Rehabilitation"></img>
          </div>
          <div className='content'>
            <p>Exercise rehabilitation plays an important role in physiotherapy for a broad spectrum of musculoskeletal conditions and injuries. Exercise rehabilitation is used effectively in helping people return to the workforce, recover from surgery or simply get back to the activities they enjoy.</p>
            <p>Therapeutic exercises consist of muscle stretching, joint mobility, or strengthening exercises.</p>
            <div>Benefits of exercise rehabilitation are:</div>
            <ul className='effect'>
              <li>Strengthen muscles</li>
              <li>Improve muscle function</li>
              <li>Reduce stress and anxiety</li>
              <li>Reduce pain and inflammation</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ExerciseRehabilitation