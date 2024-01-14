import React from 'react'
import { Outlet } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Breadcrumb from '../components/Breadcrumb'

const MeetOurTeam = () => {
  return (
    <>
      <Container>
        <Breadcrumb />
      </Container>
      <Outlet />
    </>
  )
}

export default MeetOurTeam