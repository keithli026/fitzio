import React from 'react'
import { Container } from "../GlobalStyle"
import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'
import exerciseRehabilitation from "../assets/images/Exercise_therapy.jpg"

const ExerciseRehabilitation = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <h1 className='service'>{t('Exercise Rehabilitation')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={exerciseRehabilitation} alt={t('Exercise Rehabilitation')} />
          </div>
          <div className='content'>
            <p>{t('Exercise rehabilitation plays an important role in physiotherapy for a broad spectrum of musculoskeletal conditions and injuries. Exercise rehabilitation is used effectively in helping people return to the workforce, recover from surgery or simply get back to the activities they enjoy.')}</p>
            <p>{t('Therapeutic exercises consist of muscle stretching, joint mobility, or strengthening exercises.')}</p>
            <div>{t('Benefits of exercise rehabilitation are')}</div>
            <ul className='effect'>
              <li>{t('Strengthen muscles')}</li>
              <li>{t('Improve muscle function')}</li>
              <li>{t('Reduce stress and anxiety')}</li>
              <li>{t('Reduce pain and inflammation')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ExerciseRehabilitation