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
import MyofascialRelease from './pages/MyofascialRelease';
import ExerciseRehabilitation from './pages/ExerciseRehabilitation';
import RadialShockwaveTherapy from './pages/RadialShockwaveTherapy';
import Electrotherapy from './pages/Electrotherapy';
import TherapeuticUltrasound from './pages/TherapeuticUltrasound';
import MyofascialDecompression from './pages/MyofascialDecompression';
import GeneralPhysiotherapy from './pages/GeneralPhysiotherapy';
import GeneralPhysiotherapyOverview from './pages/GeneralPhysiotherapyOverview';
import ChildrensPhysiotherapy from './pages/ChildrensPhysiotherapy';
import DVAPhysiotherapy from './pages/DVAPhysiotherapy';
import MotorVehicleClaims from './pages/MotorVehicleClaims';
import WorkcoverPhysiotherapy from './pages/WorkcoverPhysiotherapy';
import SportsPhysiotherapy from './pages/SportsPhysiotherapy';
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import BookOnline from './pages/BookOnline';
import NoPage from "./pages/NoPage";
import MeetOurTeamOverview from './pages/MeetOurTeamOverview';

export default function MainApp() {
  return (
    <BrowserRouter>
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
            <Route path=":staffId" element={<Staff />}/>
          </Route>
          <Route path="services" element={<Services />}>
            <Route index element={<ServicesOverview />} />
            <Route path="dry-needling" element={<DryNeedling />} />
            <Route path="manual-therapy" element={<ManualTherapy />} />
            <Route path="myofascial-release" element={<MyofascialRelease />} />
            <Route path="exercise-rehabilitation" element={<ExerciseRehabilitation />} />
            <Route path="radial-shockwave-therapy" element={<RadialShockwaveTherapy />} />
            <Route path="electrotherapy" element={<Electrotherapy />} />
            <Route path="therapeutic-ultrasound" element={<TherapeuticUltrasound />} />
            <Route path="myofascial-decompression" element={<MyofascialDecompression />} />
            {/* <Route path="general-physiotherapy" element={<GeneralPhysiotherapy />}>
              <Route index element={<GeneralPhysiotherapyOverview />} />
              <Route path="childrens-physiotherapy" element={<ChildrensPhysiotherapy />} />
              <Route path="DVA-physiotherapy" element={<DVAPhysiotherapy />} />
              <Route path="motor-vehicle-claims" element={<MotorVehicleClaims />} />
              <Route path="workcover-physiotherapy" element={<WorkcoverPhysiotherapy />} />
            </Route>
            <Route path="sports-physiotherapy" element={<SportsPhysiotherapy />}></Route> */}
          </Route>
          <Route path="fees" element={<Fees />} />
          <Route path="conditions" element={<Conditions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-online" element={<BookOnline />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);