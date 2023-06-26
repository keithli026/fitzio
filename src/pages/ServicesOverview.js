import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import { Container } from "../GlobalStyle";
import { Link } from "react-router-dom";
import "../components/i18n";
import { useTranslation, Trans } from 'react-i18next';

const ServicesOverview = () => {
  const { t } = useTranslation();
  return (
    <Container className="overviews">
      <div className="overview">
        <Link to="/services/manual-therapy">
          <img src={process.env.PUBLIC_URL + "/Manual_therapy.jpg"} alt="Manual Therapy"></img>
          <div className="title">{t('Manual Therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/dry-needling">
          <img src={process.env.PUBLIC_URL + "/Acupuncture.jpg"} alt="Acupuncture"></img>
          <div className="title">{t('Acupuncture')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/exercise-rehabilitation">
          <img src={process.env.PUBLIC_URL + "/Exercise_therapy.jpg"} alt="Exercise Rehabilitation"></img>
          <div className="title">{t('Exercise Rehabilitation')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/massage-therapy">
          <img src={process.env.PUBLIC_URL + "/Massage_therapy.jpg"} alt="Massage Therapy"></img>
          <div className="title">{t('Massage Therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/shockwave-therapy">
          <img src={process.env.PUBLIC_URL + "/Shockwave_therapy.jpg"} alt="Shockwave Therapy"></img>
          <div className="title">{t('Shockwave Therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/electrotherapy">
          <img src={process.env.PUBLIC_URL + "/Electrotherapy.jpg"} alt="Electrotherapy"></img>
          <div className="title">{t('Electrotherapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/cupping-therapy">
          <img src={process.env.PUBLIC_URL + "/Cupping_therapy.jpg"} alt="Cupping Therapy"></img>
          <div className="title">{t('Cupping Therapy')}</div>
        </Link>
      </div>
    </Container>
  );
}

export default ServicesOverview;