import React from 'react'
import { Container } from "../GlobalStyle"
// import "../components/i18n"
import { useTranslation } from 'react-i18next'
import acupuncture from "../assets/images/Acupuncture.jpg"

const Acupuncture = () => {
  const { t } = useTranslation();
  return (
    <>
    <Container>
      <h1 className='service'>{t('Acupuncture')}</h1>
      <div className="flexbox">
        <div className='image_wrapper'>
          <img src={acupuncture} alt={t('Acupuncture')} />
        </div>
        <div className='content'>
          <p>{t('Acupuncture is a treatment technique involving needling introduced to your skin and the soft tissue below, aiming for trigger points in your muscles and fascia.')}</p>
          <div>{t('Benefits of acupuncture are')}</div>
          <ul className='effect'>
            <li>{t('Release trigger points (muscle knots)')}</li>
            <li>{t('Promote tissue healing response')}</li>
            <li>{t('Reduce pain')}</li>
            <li>{t('Reduce muscle tightness')}</li>
            <li>{t('Restore muscle function')}</li>
          </ul>
        </div>
      </div>
    </Container>
  </>
  )
}

export default Acupuncture