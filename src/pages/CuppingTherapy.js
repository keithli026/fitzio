import React from 'react'
import { Container } from "../GlobalStyle"
import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'

const CuppingTherapy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <h1 className='service'>{t('Cupping Therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={process.env.PUBLIC_URL + "/Cupping_therapy.jpg"} alt="Cupping Therapy"></img>
          </div>
          <div className='content'>
            <p>{t('Cupping therapy is an ancient form of alternative medicine in which a therapist puts special cups on your skin to create suction.')}</p>
            <div>{t('Benefits of cupping therapy are')} </div>
            <ul className='effect'>
              <li>{t('Increase blood flow')}</li>
              <li>{t('Restore muscle function')}</li>
              <li>{t('Reduce pain')}</li>
              <li>{t('Reduce muscle tightness')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CuppingTherapy