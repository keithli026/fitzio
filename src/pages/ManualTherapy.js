import React from 'react'
import { Container } from "../GlobalStyle"
import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'

const ManualTherapy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <h1 className='service'>{t('Manual Therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={process.env.PUBLIC_URL + "/Manual_therapy.jpg"} alt="Manual Therapy"></img>
          </div>
          <div className='content'>
            <p>{t('Manual therapy consists of a wide range of hands-on interventions including soft tissue mobilizations, joint mobilizations, manipulations or muscle energy techniques.')}</p>
            <p>{t('Manual therapy is used in conjunction with an active rehabilitation program to become effective in optimizing the rehabilitation process and return to function.')}</p>
            <div>{t('Benefits of manual therapy are')}</div>
            <ul className='effect'>
              <li>{t('Restore joint range of motion')}</li>
              <li>{t('Restore muscle function')}</li>
              <li>{t('Reduce pain')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ManualTherapy