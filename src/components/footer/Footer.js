import { Container, Row } from "../../GlobalStyle"
import "./footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { phone } from "../WhatsappButton"
import logoIcon from "../../assets/images/logo_white.png"
import mailIcon from "../../assets/images/Mail.png"
import "../../components/i18n";
import { useTranslation, Trans } from 'react-i18next';


const email = "info@fitsiophysiotherapyandfitness.com.hk";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="footer">
        <Container>
          <div className="logo">
            <a href="/">
            <img src={logoIcon} alt={t('Home')} />
              {/* <img src={`${process.env.PUBLIC_URL}/logo_white.png`} alt="Home" /> */}
            </a>
          </div>
          <div className="contact">
            <div className="email">
              <a href={`mailto: ${email}`}>
              <img src={mailIcon} alt={t('email')} /><div>{email}</div>
                {/* <img src={`${process.env.PUBLIC_URL}/Mail.png`} alt="Email" /><div>{email}</div> */}
              </a>
            </div>
            <div className="whatsapp">
              <a
                href={`https://wa.me/${phone}`}
                className="whatsapp_btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} ></FontAwesomeIcon><div>{phone}</div>
              </a>
            </div>
            <div className="address">
              East Fremantle Clinic<br />
              Inside the Fremantle Rowing Club<br />
              75 Riverside Rd<br />
              East Fremantle 6158
            </div>
            <div className="follow-us">
              <div>{t('Follow Us on')}</div>
              <div className="socialMedia">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
          </div>
          <div id="opening">
            <h2 className="underline">{t('Opening Hours')}</h2>
            <div className="time">
              {t('Monday to Friday: 6am – 8pm')}<br />
              {t('Saturday: 7am – 2pm')}<br />
              {t('Sunday: Appointment only')}
            </div>
          </div>
          <div className="disclaimer">
            {t('Fitsio. Copyright 2024 - All rights reserved.')}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;