import React from 'react'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"

import { useTranslation, Trans } from 'react-i18next'
import acupuncture from "../assets/images/Acupuncture.jpg"
import manualTherapy from "../assets/images/Manual_therapy.jpg"
import exerciseRehabilitation from "../assets/images/Exercise_therapy.jpg"
import massageTherapy from "../assets/images/Massage_therapy.jpg"
import electrotherapy from "../assets/images/Electrotherapy.jpg"
import cuppingTherapy from "../assets/images/Cupping_therapy.jpg"
import shockwaveTherapy from "../assets/images/Shockwave_therapy.jpg"

const ServicesOverview = () => {
  const { t } = useTranslation();
  return (
    <Container className="overviews">
      <div className="overview">
        <Link to="/services/manual-therapy">
          <img src={manualTherapy} alt={t('Manual Therapy')} />
          <div className="title">{t('Manual Therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/acupuncture">
          <img src={acupuncture} alt={t('Acupuncture')} />
          <div className="title">{t('Acupuncture')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/exercise-rehabilitation">
          <img src={exerciseRehabilitation} alt={t('Exercise Rehabilitation')} />
          <div className="title">{t('Exercise Rehabilitation')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/massage-therapy">
          <img src={massageTherapy} alt={t('Massage Therapy')} />
          <div className="title">{t('Massage Therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/shockwave-therapy">
          <img src={shockwaveTherapy} alt={t('Shockwave Therapy')} />
          <div className="title">{t('Shockwave Therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/electrotherapy">
          <img src={electrotherapy} alt={t('Electrotherapy')} />
          <div className="title">{t('Electrotherapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/cupping-therapy">
          <img src={cuppingTherapy} alt={t('Cupping Therapy')} />
          <div className="title">{t('Cupping Therapy')}</div>
        </Link>
      </div>
    </Container>
  );
}

export default ServicesOverview;