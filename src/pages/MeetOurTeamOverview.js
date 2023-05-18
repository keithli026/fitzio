import React from 'react'
import { Container } from '../GlobalStyle'
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { getPhysiotherapist, getPhysiotherapists, deletePhysiotherapist } from "../PhysiotherapistInfo";
import { useState, useEffect } from "react";

const MeetOurTeamOverview = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let staffTotal = getPhysiotherapists();
    let staff = getPhysiotherapist(parseInt(params.staffId, 10));
    // console.log(staffTotal.length);

    return (
        <>
            <Container>
                <h1>Meet Our Team</h1>
                <div className='card_wrapper'>
                    {staffTotal.map((profile) => {
                        return(
                            <div className="card" key={profile.pid}>
                            <Link to={`/meet-our-team/${profile.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                <img src={profile.photo} alt={profile.name}></img>
                                <div className="summary">
                                    <h2 className="name">{profile.name}</h2>
                                    <div className="title">{profile.title}</div>
                                </div>
                            </Link>
                        </div>
                        );
                    })}
                    {/* <div className="card">
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
                    </div> */}
                </div>
            </Container>
        </>
    )
}

export default MeetOurTeamOverview