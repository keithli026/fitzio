import { Container, Row } from "../../GlobalStyle";
import * as F from "./style";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { phone } from "../WhatsappButton";

const email = "info@fitsiophysiotherapyandfitness.com.hk";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <Container>
          <div className="logo">
            <a href="/">
              <img src={`${process.env.PUBLIC_URL}/logo_white.png`} alt="Home" />
            </a>
          </div>
          <div className="contact">
            <div className="email">
              <a href={`mailto: ${email}`}>
                <img src={`${process.env.PUBLIC_URL}/Mail.png`} alt="Email" /><div>{email}</div>
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
              <div>Follow Us on</div>
              <div className="socialMedia">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
          </div>
          <div id="opening">
            <h2 className="underline">Opening Hours</h2>
            <div className="time">
              Monday to Friday: 6am – 8pm<br />
              Saturday: 7am – 2pm<br />
              Sunday: Appointment only
            </div>
          </div>
          <div className="disclaimer">
            Fitsio. Copyright 2024 - All rights reserved.
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;