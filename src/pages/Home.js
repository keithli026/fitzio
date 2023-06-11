import Slider from "react-slick";
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from "../GlobalStyle";
import "./home.scss";
import { getPhysiotherapists } from "../PhysiotherapistInfo";
const Home = () => {
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
  const physiotherapists = getPhysiotherapists();
  return (
    <>
      <Slider {...settings}>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>GET BACK TO DOING WHAT YOU LOVE</h2>
            <h3>Don’t suffer from pain when you can manage it with physiotherapy</h3>
            <ul>
              <li>Pain relief</li>
              <li>Improved mobility and function</li>
              <li>Injury prevention </li>
              <li>Enhanced sports performance</li>
            </ul>
            <div className="button_container">
              <a className="button" href="/contact">Contact Us</a>
              <a className="button" href="/book-online">Book Now</a>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + '/image_18_to_6.png'} alt="slide 1"></img>
        </div>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>Title 2</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src={process.env.PUBLIC_URL + '/image_18_to_6.png'} alt="slide 1"></img>
        </div>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>Title 3</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src={process.env.PUBLIC_URL + '/image_18_to_6.png'} alt="slide 1"></img>
        </div>
      </Slider>
      <Container className="promo-section">
        <h2>About</h2>
        <div className="content">
          <p>People all have something they enjoy doing; whether it be sports or family activities. They all have goals they want to achieve. At Fitsio, guided by our core values, we empower people to live a better life. We love to see people who enjoy their life and do what they enjoy doing. To do that, we treat people as unique individuals. We discuss rehabilitation roadmap to achieve their personal goals. We use a holistic approach by taking into consideration both conditions and general well-being. We provide physiotherapy and prescribe exercises to enhance better outcomes.</p>
        </div>
      </Container>
      <div className="promo-section2">
        <Container>
          <div className="content">
            <h2>Our values</h2>
            <div className="boxes">
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Holistic_approach.jpg"} alt="Holistic care"></img>
                </div>
                <h3>Holistic care</h3>
                <p>We consider our clients’ general well-being.</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Individualised_service.jpg"} alt="Individualized services"></img>
                </div>
                <h3>Individualized services</h3>
                <p>We treat our clients as unique individuals. We provide services on a one-to-one basis.</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Exercise_based_rehabilitation.jpg"} alt="Exercise rehabilitation"></img>
                </div>
                <h3>Exercise rehabilitation</h3>
                <p>Strong evidence supports exercise rehabilitation for management of musculoskeletal conditions. Therefore, we prescribe exercises as part of the treatment.</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Goal_oriented.jpg"} alt="Goal-oriented"></img>
                </div>
                <h3>Goal-oriented</h3>
                <p>Our treatment and exercise rehabilitation are guided by clients’ goals.</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Empowerment.jpg"} alt="Empowerment"></img>
                </div>
                <h3>Empowerment</h3>
                <p>We promote self-management and disease prevention.</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Long_lasting_clinical_outcomes.jpg"} alt="Long-lasting clinical outcomes"></img>
                </div>
                <h3>Long-lasting clinical outcomes</h3>
                <p>We focus on long-term solutions by addressing causes and symptoms of musculoskeletal conditions.</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Ongoing_support.jpg"} alt="Ongoing support"></img>
                </div>
                <h3>Ongoing support</h3>
                <p>Ongoing support is always available. Please contact us if you have any concerns. Our team will follow up on our clients regularly.</p>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={process.env.PUBLIC_URL + "/Evidence_based_practice.jpg"} alt="Evidence-based practice"></img>
                </div>
                <h3>Evidence-based practice</h3>
                <p>We integrate the best available research evidence with clinical expertise and clients’ values for our treatment.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="our-services-title">
        <Container>
          <h2>Our Services</h2>
        </Container>
      </div>
      <div className="our-services-content">
        <Container>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "gp.png"} alt="General Physiotherapy"></img>
              <h3>General Physiotherapy</h3>
              <p>General physiotherapy for chronic and acute conditions.</p>
            </div>
            <Link to="/services/general-physiotherapy" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "dn.png"} alt="Dry Needling"></img>
              <h3>Dry Needling</h3>
              <p>Acupuncture needles applied directly to muscular trigger points to reduce muscle tone and improve blood flow.</p>
            </div>
            <Link to="/services/dry-needling" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "er.png"} alt="Exercise Rehabilitation"></img>
              <h3>Exercise Rehabilitation</h3>
              <p>Individually tailored and supervised exercises utilising our fully equipped gym, to help you get moving again after injury or surgery.</p>
            </div>
            <Link to="/services/exercise-rehabilitation" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "sp.png"} alt="Sports Physiotherapy"></img>
              <h3>Sports Physiotherapy</h3>
              <p>Our physiotherapists have experience in a range of sports including Australian Rules Football, Gridiron, Netball and Basketball.</p>
            </div>
            <Link to="/services/sports-physiotherapy" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "mt.png"} alt="Massage Therapy"></img>
              <h3>Massage Therapy</h3>
              <p>Utilising a range of techniques to improve circulation, blood flow, reduce muscle tension and improve joint mobility.</p>
            </div>
            <Link to="/services/massage-therapy" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "paa.png"} alt="Physiotherapy After a Car Accident"></img>
              <h3>Physiotherapy After a Car Accident</h3>
              <p>Your step by step guide to claiming your insurance and receiving treatment after your car accident.</p>
            </div>
            <Link to="/services/massage-therapy" className="button">Learn more</Link>
          </div>
        </Container>
      </div>
      <div className="our-team-title">
        <Container>
          <h2>Our Team</h2>
        </Container>
      </div>
      <div className="our-team-content">
        <Container>
          <div className="members_wrapper {">
            {physiotherapists.map((physiotherapist, i) => {
              return(
                <div className="members" key={i}>
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