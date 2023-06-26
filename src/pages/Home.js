import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from "../GlobalStyle";
import "./home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { getPhysiotherapists } from "../PhysiotherapistInfo";
import { HashLink } from 'react-router-hash-link';
import "../components/i18n";
import { useTranslation, Trans } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  };
  let navigate = useNavigate();
  const changeLocation = (placeToGo) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }
  const physiotherapists = getPhysiotherapists();
  return (
    <>
      <Slider {...settings}>
        <div className="banner">
          <div className="textbox" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/banner-image-1.jpg'})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="content">
              <h2>{t('GET BACK TO DOING WHAT YOU LOVE')}</h2>
              <h3>{t("DON'T SUFFER FROM PAIN WHEN YOU CAN MANAGE IT")}</h3>
              <ul>
                <li>{t('Pain relief')}</li>
                <li>{t('Improved mobility and function')}</li>
                <li>{t('Injury prevention')}</li>
                <li>{t('Enhanced sports performance')}</li>
              </ul>
              <div className="button_container">
                <a className="button" href="/contact">{t('Contact Us')}</a>
                <a className="button" href="/book-online">{t('Book Now')}</a>
              </div>
              <div className="learn-more">
                <HashLink smooth to="/#about-section">
                  <div>{t('Learn More')}</div>
                  <img src={process.env.PUBLIC_URL + '/arrow.png'} alt="arrow" />
                </HashLink>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="textbox" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/banner-image-2.jpg'})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <h2>Title 2</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </Slider>
      <Container id="about-section">
        <h2 className="underline">{t('About')}</h2>
        <div className="content">
          <p>{t('People all have something they enjoy doing; whether it be sports or family activities. They all have goals they want to achieve. At Fitsio, guided by our core values, we empower people to live a better life. We love to see people who enjoy their life and do what they enjoy doing. To do that, we treat people as unique individuals. We discuss rehabilitation roadmap to achieve their personal goals. We use a holistic approach by taking into consideration both conditions and general well-being. We provide physiotherapy and prescribe exercises to enhance better outcomes.')}</p>
        </div>
      </Container>
      <div id="our-values-section">
        <Container>
          <div className="content">
            <h2 className="underline">{t('Our values')}</h2>
            <div className="boxes">
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Holistic_approach.png"} alt="Holistic care"></img>
                </div>
                <h3>{t('Holistic care')}</h3>
                <p>{t("We consider our clients' general well-being.")}</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Individualised_service.png"} alt="Individualized services"></img>
                </div>
                <h3>{t('Individualized services')}</h3>
                <p>{t('We provide services on a one-to-one basis.')}</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Exercise_based_rehabilitation.png"} alt="Exercise rehabilitation"></img>
                </div>
                <h3>{t('Exercise rehabilitation')}</h3>
                <p>{t('We prescribe exercises as part of the management.')}</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Goal_oriented.png"} alt="Goal-oriented"></img>
                </div>
                <h3>{t('Goal-oriented')}</h3>
                <p>{t("Our treatment and exercise rehabilitation are guided by clients' goals.")}</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Empowerment.png"} alt="Empowerment"></img>
                </div>
                <h3>{t('Empowerment')}</h3>
                <p>{t('We promote self-management and disease prevention.')}</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Long_lasting_clinical_outcomes.png"} alt="Long-lasting clinical outcomes"></img>
                </div>
                <h3>{t('Long-lasting clinical outcomes')}</h3>
                <p>{t('We focus on long-term solutions by addressing causes and symptoms of musculoskeletal conditions.')}</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Ongoing_support.png"} alt="Ongoing support"></img>
                </div>
                <h3>{t('Ongoing support')}</h3>
                <p>{t('Our team will follow up on our clients regularly. Please contact us if you have any concerns.')}</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Evidence_based_practice.png"} alt="Evidence-based practice"></img>
                </div>
                <h3>{t('Evidence-based practice')}</h3>
                <p>{t("We integrate the best available research evidence with clinical expertise and clients' values for our treatment.")}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div id="our-services-section">
        <Container>
          <h2 className="underline">{t('Our services')}</h2>
          <div className="boxes">
            <div className="box"><Link to="/services/manual-therapy">{t('Manual therapy')}</Link></div>
            <div className="box"><Link to="/services/dry-needling">{t('Acupuncture')}</Link></div>
            <div className="box"><Link to="/services/exercise-rehabilitation">{t('Exercise rehabilitation')}</Link></div>
            <div className="box"><Link to="/services/massage-therapy">{t('Massage therapy')}</Link></div>
            <div className="box"><Link to="/services/extracorporeal-shockwave-therapy">{t('Shockwave therapy')}</Link></div>
            <div className="box"><Link to="/services/electrotherapy">{t('Electrotherapy')}</Link></div>
            <div className="box"><Link to="/services/cupping-therapy">{t('Cupping therapy')}</Link></div>
          </div>
        </Container>
      </div>
      <div className="our-team-section">
        <Container>
        <h2 className="underline">{t('Our team')}</h2>
          <div className="members">
            {physiotherapists.map((physiotherapist, i) => {
              return (
                <div className="member" key={i}>
                  <img src={physiotherapist.photo} alt={physiotherapist.name}></img>
                  <h3>{physiotherapist.name}</h3>
                  <p>{physiotherapist.title}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;