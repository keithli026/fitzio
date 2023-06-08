import { useState, useLayoutEffect, useRef, useReducer, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container, Row } from "../../GlobalStyle";
import * as H from "./style";
import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const desktopMinWidth = 992;

const QueryNavLink = ({to, ...props}) => {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

const useWindowSize = () => {
  const [size, setSize] = useState([0,0]);
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
  let navigate = useNavigate();
  let location = useLocation();
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  }

  const changeLocation = (placeToGo) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }
  const refHeader = useRef(null);
  const refMenu = useRef(null);

  useEffect(() => {
    refMenu.current.style.height = `${window.innerHeight - refHeader.current.clientHeight}px`;
    // console.log(window.innerHeight, refHeader.current.clientHeight);
    // console.log("pathname: " + location.pathname + "; search: " + location.search);
    // console.log("after setShow: ",show);
    // console.log(initialState.about, state.about, initialState.ourteam, state.ourteam);
  }, []);
  const initialState = {
    about: false,
    ourteam: false,
    services: false,
    gp: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "about":
        return { ...state, about: !state.about, ourteam: false, services: false, gp: false };
      case "ourteam":
        return { ...state, about: true, ourteam: !state.ourteam, services: false, gp: false };
      case "services":
        return { ...state, about: false, ourteam: false, services: !state.services, gp: false };
      case "gp":
        return { ...state, about: false, ourteam: false, services: true, gp: !state.gp };
      default:
        return initialState;
    }
  }

  const showItemAbout = () => {
    dispatch({ type: "about" });
  }
  const showItemOurTeam = () => {
    dispatch({ type: "ourteam" });
  }
  const showItemServices = () => {
    dispatch({ type: "services" });
  }
  const showItemGP = () => {
    dispatch({ type: "gp" });
  }
  const [width, height] = useWindowSize();
  if (show) {
    refMenu.current.style.height = `${height - refHeader.current.clientHeight}px`;
    if (width >= desktopMinWidth) {
      setShow(false);
    }
  }

  return (
    <>
      <H.Header id="header">
        <Container sm100 md100 ref={refHeader}>
          <Row spaceBetween alignItemsCenter>
            <H.LogoDiv id="logo">
              <a href="/">
                <H.Logo alt="site-logo" src={process.env.PUBLIC_URL + '/logo_white.png'}></H.Logo>
              </a>
            </H.LogoDiv>
            <H.MenuWrapper>
              <H.MenuList level_0 className="level-0">
                <H.MenuItem>
                  <Link to="/about">About</Link>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/meet-our-team">Meet Our Team</Link>
                </H.MenuItem>
                <H.MenuItem className="expandable">
                  <Link to="/services">Services</Link>
                  <H.MenuList className="level-1">
                    <H.MenuItem><Link to="/services/manual-therapy">Manual Therapy</Link></H.MenuItem>
                    <H.MenuItem><Link to="/services/dry-needling">Dry Needling</Link></H.MenuItem>
                    <H.MenuItem><Link to="/services/exercise-rehabilitation">Exercise Rehabilitation</Link></H.MenuItem>
                    <H.MenuItem><Link to="/services/massage-therapy">Massage Therapy</Link></H.MenuItem>
                    <H.MenuItem><Link to="/services/extracorporeal-shockwave-therapy">Extracorporeal Shockwave Therapy</Link></H.MenuItem>
                    <H.MenuItem><Link to="/services/electrotherapy">Electrotherapy</Link></H.MenuItem>
                    <H.MenuItem><Link to="/services/cupping-therapy">Cupping Therapy</Link></H.MenuItem>
                    {/* <H.MenuItem><Link to="/services/taping">Taping</Link></H.MenuItem> */}
                  </H.MenuList>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/fees">Fees</Link>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/conditions">Conditions</Link>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/contact">Contact</Link>
                </H.MenuItem>
                <H.MenuItem>
                  <Link to="/book-online">Book Online</Link>
                </H.MenuItem>
              </H.MenuList>
            </H.MenuWrapper>
            <H.MenuButton className="menuBtn" onClick={showMenu}>
              <FontAwesomeIcon icon={show ? faTimes : faBars} />
            </H.MenuButton>
          </Row>
        </Container>
        <H.MobileMenuWrapper style={{ display: show ? "block" : "none" }} className="mnav">
          <H.MobileMenuList className="mlevel-0" ref={refMenu}>
            <H.MobileMenuItem>
              <Link to="/about" onClick={() => changeLocation('/about')}>About</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/meet-our-team" onClick={() => changeLocation('/meet-our-team')}>Meet Our Team</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem style={{ paddingBottom: state.services ? "0" : "0.5rem" }}>
              <Link to="/services" style={{ paddingBottom: state.services ? "0.875rem" : "0.375rem" }} onClick={() => changeLocation('/services')}>Services</Link>
              <div className="dropdownBtn" onClick={showItemServices} aria-expanded={state.services ? "true" : "false"}>
                {state.services ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
              <H.MobileMenuList className="mlevel-1" style={{ display: state.services ? "flex" : "none" }}>
                <H.MobileMenuItem><Link to="/services/manual-therapy" onClick={() => changeLocation('/services/manual-therapy')}>Manual Therapy</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/dry-needling" onClick={() => changeLocation('/services/dry-needling')}>Dry Needling</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/exercise-rehabilitation" onClick={() => changeLocation('/services/exercise-rehabilitation')}>Exercise Rehabilitation</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/massage-therapy" onClick={() => changeLocation('/services/massage-therapy')}>Massage Therapy</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/extracorporeal-shockwave-therapy" onClick={() => changeLocation('/services/extracorporeal-shockwave-therapy')}>Extracorporeal Shockwave Therapy</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/electrotherapy" onClick={() => changeLocation('/services/electrotherapy')}>Electrotherapy</Link></H.MobileMenuItem>
                <H.MobileMenuItem><Link to="/services/cupping-therapy" onClick={() => changeLocation('/services/cupping-therapy')}>Cupping Therapy</Link></H.MobileMenuItem>
                {/* <H.MobileMenuItem><Link to="/services/taping" onClick={() => changeLocation('/services/taping')}>Taping</Link></H.MobileMenuItem> */}
              </H.MobileMenuList>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/fees" onClick={() => changeLocation('/fees')}>Fees</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/conditions" onClick={() => changeLocation('/conditions')}>Conditions</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/contact" onClick={() => changeLocation('/contact')}>Contact</Link>
            </H.MobileMenuItem>
            <H.MobileMenuItem>
              <Link to="/book-online" onClick={() => changeLocation('/book-online')}>Book Online</Link>
            </H.MobileMenuItem>
          </H.MobileMenuList>
        </H.MobileMenuWrapper>
      </H.Header>
    </>
  );
}

export default Header;