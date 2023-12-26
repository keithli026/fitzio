import { useState, useLayoutEffect, useRef, useReducer, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container, lg } from "../../GlobalStyle";
import * as H from "./style";
import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import { phone } from "../WhatsappButton";
import "../../components/i18n";
import { useTranslation, Trans } from 'react-i18next';
import logoIcon from "../../assets/images/logo_white.png"

const lngs = {
  en: { nativeName: 'English', symbol: 'EN' },
  tc: { nativeName: '繁體中文', symbol: '繁' }
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, []);
  return size;
}

const Header = () => {
  const [show, setShow] = useState(false);
  const closeMenu = () => {
    setShow(false);
  }

  const refHeader = useRef(null);
  const refMenu = useRef(null);
  const initialState = {
    isServicesOn: false,
    isTestingOn: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    refMenu.current.style.height = `${window.innerHeight - refHeader.current.clientHeight}px`;
    // console.log(window.innerHeight, refHeader.current.clientHeight);
    // console.log("pathname: " + location.pathname + "; search: " + location.search);
    // console.log("after setShow: ",show);
    // console.log(initialState.isServicesOn, state.isServicesOn, initialState.isTestingOn, state.isTestingOn);
  }, []);


  function reducer(state, action) {
    switch (action.type) {
      case "isServicesOn":
        return { ...state, isServicesOn: !state.isServicesOn, isTestingOn: false};
      case "isTestingOn":
        return { ...state, isTestingOn: !state.isTestingOn, isServicesOn: false};
      default:
        return initialState;
    }
  }

  const [width, height] = useWindowSize();
  if (show) {
    refMenu.current.style.height = `${height - refHeader.current.clientHeight}px`;
    if (width >= lg) {
      setShow(false);
      document.body.style.overflowY = null;
    } else {
      document.body.style.overflowY = "hidden";
    }
  } else {
    document.body.style.overflowY = null;
  }


  const { t, i18n } = useTranslation();
  return (
    <>
      <H.Header id="header">
        <Container sm100 md100 ref={refHeader}>
          <div className="logo">
            <Link to="/" onClick={closeMenu} title="home">
            <img src={logoIcon} alt={t('site logo')} />
              {/* <img alt="site logo" src={process.env.PUBLIC_URL + '/logo_white.png'} /> */}
            </Link>
          </div>
          <H.MenuWrapper>
            <H.MenuList level_0 className="level-0">
              {/* <H.MenuItem className="expandable">
                <Link to="/testing">Testing</Link>
                <H.MenuList className="level-1">
                  <H.MenuItem><Link to="/testing/testing-content-page">Testing Content page</Link></H.MenuItem>
                </H.MenuList>
              </H.MenuItem> */}
              <H.MenuItem>
                <Link to="/about">{t('About')}</Link>
              </H.MenuItem>
              <H.MenuItem>
                <Link to="/meet-our-team">{t('Meet Our Team')}</Link>
              </H.MenuItem>
              <H.MenuItem className="expandable">
                <Link to="/services">{t('Services')}</Link>
                <H.MenuList className="level-1">
                  <H.MenuItem><Link to="/services/manual-therapy">{t('Manual Therapy')}</Link></H.MenuItem>
                  <H.MenuItem><Link to="/services/acupuncture">{t('Acupuncture')}</Link></H.MenuItem>
                  <H.MenuItem><Link to="/services/exercise-rehabilitation">{t('Exercise Rehabilitation')}</Link></H.MenuItem>
                  <H.MenuItem><Link to="/services/massage-therapy">{t('Massage Therapy')}</Link></H.MenuItem>
                  <H.MenuItem><Link to="/services/shockwave-therapy">{t('Shockwave Therapy')}</Link></H.MenuItem>
                  <H.MenuItem><Link to="/services/electrotherapy">{t('Electrotherapy')}</Link></H.MenuItem>
                  <H.MenuItem><Link to="/services/cupping-therapy">{t('Cupping Therapy')}</Link></H.MenuItem>
                </H.MenuList>
              </H.MenuItem>
              <H.MenuItem>
                <Link to="/fees">{t('Fees')}</Link>
              </H.MenuItem>
              <H.MenuItem>
                <Link to="/conditions">{t('Conditions')}</Link>
              </H.MenuItem>
              <H.MenuItem>
                <Link to="/contact">{t('Contact')}</Link>
              </H.MenuItem>
              <H.MenuItem>
                <Link to="/book-online" className="button">{t('Book Online')}</Link>
              </H.MenuItem>
            </H.MenuList>
          </H.MenuWrapper>
          <div className="language-switcher">
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].symbol}
              </button>
            ))}
          </div>
          <H.MenuButton className="menuBtn" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={show ? faTimes : faBars} />
          </H.MenuButton>
          <H.PhoneButton className="telphone">
            <a href={`tel:+${phone}`}><FontAwesomeIcon icon={faPhone} /></a>
          </H.PhoneButton>
        </Container>
        <H.MobileMenuWrapper style={{ display: show ? "block" : "none" }} className="mnav">
          <H.MobileMenuList className="mlevel-0" ref={refMenu}>
            {/* <H.MobileMenuItem>
              <Link to="/testing" style={{ paddingBottom: state.isTestingOn ? "0.875rem" : "0.375rem" }} onClick={closeMenu}>Testing</Link>
              <div className="dropdownBtn" onClick={() => dispatch({type: "isTestingOn"})} aria-expanded={state.isTestingOn ? "true" : "false"}>
                {state.isTestingOn ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
              <H.MobileMenuList className="mlevel-1" style={{ display: state.isTestingOn ? "flex" : "none" }}>
                <H.MobileMenuItem><Link to="/testing/testing-content-page" onClick={closeMenu}>Testing Content page</Link></H.MobileMenuItem>
              </H.MobileMenuList>
            </H.MobileMenuItem> */}
            <H.MobileMenuItem>
              <Link to="/about" onClick={closeMenu}>{t('About')}</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/meet-our-team" onClick={closeMenu}>{t('Meet Our Team')}</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem style={{ paddingBottom: state.isServicesOn ? "0" : "0.5rem" }}>
              <Link to="/services" style={{ paddingBottom: state.isServicesOn ? "0.875rem" : "0.375rem" }} onClick={closeMenu}>{t('Services')}</Link>
              <div className="dropdownBtn" onClick={() => dispatch({type: "isServicesOn"})} aria-expanded={state.isServicesOn ? "true" : "false"}>
                {state.isServicesOn ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
              <H.MobileMenuList className="mlevel-1" style={{ display: state.isServicesOn ? "flex" : "none" }}>
                <H.MobileMenuItem><Link to="/services/manual-therapy" onClick={closeMenu}>{t('Manual Therapy')}</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/acupuncture" onClick={closeMenu}>{t('Acupuncture')}</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/exercise-rehabilitation" onClick={closeMenu}>{t('Exercise Rehabilitation')}</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/massage-therapy" onClick={closeMenu}>{t('Massage Therapy')}</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/shockwave-therapy" onClick={closeMenu}>{t('Shockwave Therapy')}</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/electrotherapy" onClick={closeMenu}>{t('Electrotherapy')}</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/cupping-therapy" onClick={closeMenu}>{t('Cupping Therapy')}</Link></H.MobileMenuItem>
              </H.MobileMenuList>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/fees" onClick={closeMenu}>{t('Fees')}</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/conditions" onClick={closeMenu}>{t('Conditions')}</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/contact" onClick={closeMenu}>{t('Contact')}</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/book-online" onClick={closeMenu}>{t('Book Online')}</Link>
            </H.MobileMenuItem>
          </H.MobileMenuList>
        </H.MobileMenuWrapper>
      </H.Header>
    </>
  );
}

export default Header;