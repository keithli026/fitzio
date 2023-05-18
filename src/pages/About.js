import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "../GlobalStyle";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
    return (
        <>
            <Container>
                <Breadcrumb />
                <h1>About</h1>
                <p>People all have something they enjoy doing; whether it be sports or family activities. They all have goals they want to achieve. Guided by our core values, we empower people to live a better life. We love to see people who enjoy their life and do what they enjoy doing. To do that, we treat people as unique individuals. We discuss rehabilitation roadmap (what needs to be done together) to achieve their personal goals. We use a holistic approach by providing both physiotherapy and exercise rehabilitation during the session.</p>   
            </Container>
            <Outlet />
        </>
    );
}

export default About;
