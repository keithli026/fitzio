import React from 'react'
import { Container } from '../GlobalStyle'
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { getPhysiotherapist, deletePhysiotherapist } from "../PhysiotherapistInfo";
import { useState, useEffect } from "react";

const MeetOurTeamOverview = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let staff = getPhysiotherapist(parseInt(params.staffId, 10));
    return (
        <>
            <Container>
                <h1>Meet Our Team</h1>
                <div className='card_wrapper'>
                    <div className="card">
                        <Link to="/meet-our-team/1">
                            <img src={process.env.PUBLIC_URL + "Oliver_Li.jpg"} alt="Oliver Li"></img>
                            <div className="summary">
                                <h2 className="name">Oliver Li</h2>
                                <div className="title">Physiotherapist</div>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/meet-our-team/2">
                            <img src={process.env.PUBLIC_URL + "Oliver_Li.jpg"} alt="Oliver Li"></img>
                            <div className="summary">
                                <h2 className="name">Oliver Li 2</h2>
                                <div className="title">Physiotherapist</div>
                            </div>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/meet-our-team/3">
                            <img src={process.env.PUBLIC_URL + "Oliver_Li.jpg"} alt="Oliver Li"></img>
                            <div className="summary">
                                <h2 className="name">Oliver Li 3</h2>
                                <div className="title">Physiotherapist</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default MeetOurTeamOverview