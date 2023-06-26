import React from 'react'
import { Container } from "../GlobalStyle"
import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'

const Electrotherapy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <h1 className='service'>{t('Electrotherapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={process.env.PUBLIC_URL + "/Electrotherapy.jpg"} alt="Electrotherapy"></img>
          </div>
          <div className='content'>
            <p>{t('Electrotherapy is the use of electrical energy as a medical treatment. This includes interferential therapy, magnetic field therapy, or therapeutic ultrasound.')}</p>
            <div>{t('Benefits of modalities are')}</div>
            <ul className='effect'>
              <li>{t('Reduce pain')}</li>
              <li>{t('Reduce swelling')}</li>
              <li>{t('Increase muscle stimulation')}</li>
              <li>{t('Increase blood flow')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Electrotherapy