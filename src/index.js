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
import DryNeedling from './pages/DryNeedling';
import ManualTherapy from './pages/ManualTherapy';
import ExerciseRehabilitation from './pages/ExerciseRehabilitation';
import MassageTherapy from './pages/MassageTherapy';
import ExtracorporealShockwaveTherapy from './pages/ExtracorporealShockwaveTherapy';
import Taping from './pages/Taping';
import Electrotherapy from './pages/Electrotherapy';
import CuppingTherapy from './pages/CuppingTherapy';
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import BookOnline from './pages/BookOnline';
import NoPage from "./pages/NoPage";
import MeetOurTeamOverview from './pages/MeetOurTeamOverview';
import ScrollToTop from './components/ScrollToTop';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const phone = "68958166";
export function WhatsApp() {
  return (
    <a
      href={`https://wa.me/${phone}`}
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} ></FontAwesomeIcon>
    </a>
  );
}

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
              <Route path="dry-needling" element={<DryNeedling />} />
              <Route path="exercise-rehabilitation" element={<ExerciseRehabilitation />} />
              <Route path="massage-therapy" element={<MassageTherapy />} />
              <Route path="extracorporeal-shockwave-therapy" element={<ExtracorporealShockwaveTherapy />} />
              <Route path="electrotherapy" element={<Electrotherapy />} />
              <Route path="cupping-therapy" element={<CuppingTherapy />} />
              {/* <Route path="taping" element={<Taping />} /> */}
            </Route>
            <Route path="fees" element={<Fees />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book-online" element={<BookOnline />} />
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
    <WhatsApp />
  </React.StrictMode>
);