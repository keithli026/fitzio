import React from 'react'
import { Container } from "../GlobalStyle"
import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'

const ExtracorporealShockwaveTherapy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <h1 className='service'>{t('Extracorporeal Shockwave Therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={process.env.PUBLIC_URL + "/Shockwave_therapy.jpg"} alt="Extracorporeal Shockwave Therapy"></img>
          </div>
          <div className='content'>
            <p>{t('Extracorporeal shock wave therapy promotes a healing environment in injured tissue by stimulating the growth of new blood vessels, growth factors, cell proliferation, and reducing inflammatory markers. It is commonly used in treating tendon injuries.')}</p>
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

export default ExtracorporealShockwaveTherapy