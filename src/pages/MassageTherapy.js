import React from 'react'
import { Container } from "../GlobalStyle"
import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'
import massageTherapy from "../assets/images/Massage_therapy.jpg"

const MassageTherapy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <h1 className='service'>{t('Massage Therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={massageTherapy} alt={t('Massage Therapy')} />
          </div>
          <div className='content'>
            <p>{t('Massage therapy involves a range of techniques and styles, such as soft tissue massage, deep tissue massage, sports massage, trigger point therapy, or myofascial release.')}</p>
            <div>{t('Benefits of massage therapy are')}</div>
            <ul className='effect'>
              <li>{t('Reduce stress and anxiety')}</li>
              <li>{t('Restore muscle function')}</li>
              <li>{t('Promote blood circulation')}</li>
              <li>{t('Reduce pain')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MassageTherapy