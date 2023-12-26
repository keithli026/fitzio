import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Staff from './pages/Staff';
// import Physiotherapists from './pages/Physiotherapists';
// import PhysiotherapistsOverview from './pages/physiotherapistsOverview';
// import Physiotherapist from './pages/Physiotherapist';
import MeetOurTeam from './pages/MeetOurTeam';
import Fees from './pages/Fees';
import Services from "./pages/Services";
import ServicesOverview from './pages/ServicesOverview';
import Acupuncture from './pages/Acupuncture';
import ManualTherapy from './pages/ManualTherapy';
import ExerciseRehabilitation from './pages/ExerciseRehabilitation';
import MassageTherapy from './pages/MassageTherapy';
import ShockwaveTherapy from './pages/ShockwaveTherapy';
import Electrotherapy from './pages/Electrotherapy';
import CuppingTherapy from './pages/CuppingTherapy';
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import BookOnline from './pages/BookOnline';
import NoPage from "./pages/NoPage";
import MeetOurTeamOverview from './pages/MeetOurTeamOverview';
import ScrollToTop from './components/ScrollToTop';
import WhatsappButton from './components/WhatsappButton';
// import Testing from './pages/Testing';
// import TestingOverview from './pages/TestingOverview';
// import TestingContentPage from './pages/TestingContentPage';

export default function MainApp() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* <Route path="physiotherapists" element={<Physiotherapists />}>
            <Route index element={<PhysiotherapistsOverview />} />
            <Route path=":physiotherapistId" element={<Physiotherapist />} />
          </Route> */}
            <Route path="meet-our-team" element={<MeetOurTeam />}>
              <Route index element={<MeetOurTeamOverview />} />
              <Route path=":staffId" element={<Staff />} />
            </Route>
            <Route path="services" element={<Services />}>
              <Route index element={<ServicesOverview />} />
              <Route path="manual-therapy" element={<ManualTherapy />} />
              <Route path="acupuncture" element={<Acupuncture />}/>
              <Route path="exercise-rehabilitation" element={<ExerciseRehabilitation />} />
              <Route path="massage-therapy" element={<MassageTherapy />} />
              <Route path="shockwave-therapy" element={<ShockwaveTherapy />} />
              <Route path="electrotherapy" element={<Electrotherapy />} />
              <Route path="cupping-therapy" element={<CuppingTherapy />} />
            </Route>
            <Route path="fees" element={<Fees />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book-online" element={<BookOnline />} />
            {/* <Route path="testing" element={<Testing/>}>
              <Route index element={<TestingOverview/>}></Route>
              <Route path="testing-content-page" element={<TestingContentPage/>} />
            </Route> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
    <WhatsappButton />
  </React.StrictMode>
);