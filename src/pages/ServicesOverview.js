import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import { Container } from "../GlobalStyle";
import { Link } from "react-router-dom"

const ServicesOverview = () => {
    return (
        <Container className="overviews">
            <div className="overview">
                <Link to="/services/manual-therapy">
                    <img src={process.env.PUBLIC_URL + "/Manual_therapy.jpg"} alt="Manual Therapy"></img>
                    <div className="title">Manual Therapy</div>
                </Link>
            </div>
              <div className="overview">
                <Link to="/services/dry-needling">
                    <img src={process.env.PUBLIC_URL + "/Acupuncture.jpg"} alt="Dry Needling"></img>
                    <div className="title">Dry Needling</div>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/exercise-rehabilitation">
                    <img src={process.env.PUBLIC_URL + "/Exercise_therapy.jpg"} alt="Exercise Rehabilitation"></img>
                    <div className="title">Exercise Rehabilitation</div>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/massage-therapy">
                    <img src={process.env.PUBLIC_URL + "/Massage_therapy.jpg"} alt="Massage Therapy"></img>
                    <div className="title">Massage Therapy</div>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/extracorporeal-shockwave-therapy">
                    <img src={process.env.PUBLIC_URL + "/Shockwave_therapy.jpg"} alt="Extracorporeal Shockwave Therapy"></img>
                    <div className="title">Extracorporeal Shockwave Therapy</div>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/electrotherapy">
                    <img src={process.env.PUBLIC_URL + "/Electrotherapy.jpg"} alt="Electrotherapy"></img>
                    <div className="title">Electrotherapy</div>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/cupping-therapy">
                    <img src={process.env.PUBLIC_URL + "/Cupping_therapy.jpg"} alt="Cupping Therapy"></img>
                    <div className="title">Cupping Therapy</div>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/taping">
                    <img src={process.env.PUBLIC_URL + "/Taping.jpg"} alt="Taping"></img>
                    <div className="title">Taping</div>
                </Link>
            </div>

            {/* <div className="overview">
                <Link to="/services/myofascial-release">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Myofascial Release"></img>
                    <div className="title">Myofascial Release</div>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/radial-shockwave-therapy">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Radial Shockwave Therapy"></img>
                    <div className="title">Radial Shockwave Therapy</div>
                </Link>
            </div>
            <div className="overview">
                <Link to="/services/therapeutic-ultrasound">
                    <img src={process.env.PUBLIC_URL + "/image_3_to_2.png"} alt="Therapeutic Ultrasound"></img>
                    <div className="title">Therapeutic Ultrasound</div>
                </Link>
            </div> */}

        </Container>
    );
}

export default ServicesOverview;