import React from 'react'
import Container from "react-bootstrap/Container"
import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import { getPhysiotherapist, getPhysiotherapists, deletePhysiotherapist } from "../PhysiotherapistInfo"
import { useTranslation, Trans } from 'react-i18next'

const MeetOurTeamOverview = () => {
  let params = useParams();
  let staffTotal = getPhysiotherapists();
  let staff = getPhysiotherapist(parseInt(params.staffId, 10));
  // console.log(staffTotal.length);
  const { t } = useTranslation(['meet-our-team', 'common']);
  return (
    <>
      <Container>
        <h1>{t('Meet Our Team')}</h1>
        <div className='card_wrapper'>
          {staffTotal.map((profile) => {
            return (
              <div className="card" key={profile.pid}>
                <Link to={`/meet-our-team/${profile.name.replace(/\s+/g, '-').toLowerCase()}`}>
                  <img src={profile.photo} alt={t(profile.name)}></img>
                  <div className="summary">
                    <h2 className="name">{t(profile.name)}</h2>
                    <div className="title">{t(profile.title)}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  )
}

export default MeetOurTeamOverview