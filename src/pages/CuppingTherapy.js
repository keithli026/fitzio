import React from 'react'
import { Container } from "../GlobalStyle"
// import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'
import cuppingTherapy from "../assets/images/Cupping_therapy.jpg"

const CuppingTherapy = () => {
  const { t } = useTranslation(['cupping-therapy', 'common']);
  return (
    <>
      <Container>
        <h1 className='service'>{t('Cupping Therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={cuppingTherapy} alt={t('Cupping Therapy')} />
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