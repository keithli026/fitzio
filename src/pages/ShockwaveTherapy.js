import React from 'react'
import { Container } from "../GlobalStyle"
import i18n from '../components/i18n'
import { useTranslation, Trans } from 'react-i18next'
import shockwaveTherapy from "../assets/images/Shockwave_therapy.jpg"

const ShockwaveTherapy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <h1 className='service'>{t('Shockwave Therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={shockwaveTherapy} alt={t('Shockwave Therapy')} />
            {/* <img src={process.env.PUBLIC_URL + "/Shockwave_therapy.jpg"} alt="Shockwave Therapy"></img> */}
          </div>
          <div className='content'>
            <p>{t('Shock wave therapy promotes a healing environment in injured tissue by stimulating the growth of new blood vessels, growth factors, cell proliferation, and reducing inflammatory markers. It is commonly used in treating tendon injuries.')}</p>
            <div>{t('Benefits of extracorporeal shock wave therapy are')} </div>
            <ul className='effect'>
              <li>{t('Promote tissue healing response')}</li>
              <li>{t('Reduce inflammation')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShockwaveTherapy