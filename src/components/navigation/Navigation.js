import React, { Fragment, useEffect } from "react";
import Tilt from "react-tilt";
import { Link } from "react-scroll";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import * as scrolledActions from "../../redux/actions/scrolledActions";
import * as hamClickedActions from "../../redux/actions/hamClickedActions";

import logo_main from "./images/logo_main.png";
import facebookPicture from "./images/facebook.png";

import "./Navigation.css";
import { NavigationEnum } from "./enums/NavigationEnum";

const Navigation = (props) => {
  const { scrolled, hamClicked, actions } = props;

  const showMobileMenu = () => actions.updateHamClicked(!hamClicked);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

//   const handleNavClick = () => {
//     setTimeout(() => {
//       window.scrollBy(0, 5);
//     }, 1050);
//   };

  const handleScroll = () => {
    window.pageYOffset >= 80
      ? actions.updateScrolled(true)
      : actions.updateScrolled(false);
  };

  if (!scrolled) {
    return (
      <Fragment>
        <nav className="nav_main">
          <div className="logo_container mt0">
            <Tilt
              className="logo_main_container br2 shadow-2"
              options={{ max: 55 }}
            >
              <div className="Tilt-inner">
                <img className="logo_main" src={logo_main} alt="logo" />
              </div>
            </Tilt>
          </div>

          <ul className="ul_menu_main">
            <li className="li_menu_main_item">
              <Link
                className="link_main_nav"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                data-item={NavigationEnum.NAV.HOME}
              >
                <span>
                  {NavigationEnum.NAV.HOME}
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={`nav_main_mobile ${hamClicked ? "active" : ""}`}>
          <button className="hamburger_container" onClick={showMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="mobile_links-container">
            <div className="mobile-link_container">
              <Link
                className="link_main_mobile_nav"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={showMobileMenu}
              >
                <span>
                  {NavigationEnum.NAV.HOME}
                </span>
              </Link>
            </div>

            <ul className="ul_social-media_mobile">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                >
                  <img
                    className="icon_social-media_mobile"
                    src={facebookPicture}
                    alt="facebook"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav className="nav_main sticky">
          <div className="logo_container mt0">
            <Tilt
              className="logo_main_container br2 shadow-2"
              options={{ max: 35 }}
            >
              <div className="Tilt-inner">
                <img className="logo_main" src={logo_main} alt="logo" />
              </div>
            </Tilt>
          </div>

          <ul className="ul_menu_main">
            <li className="li_menu_main_item">
              <Link
                className="link_main_nav"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                data-item={NavigationEnum.NAV.HOME}
              >
                <span>
                  {NavigationEnum.NAV.HOME}
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={`nav_main_mobile ${hamClicked ? "active" : ""}`}>
          <button className="hamburger_container" onClick={showMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="mobile_links-container">
            <div className="mobile-link_container">
              <Link
                className="link_main_mobile_nav"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={showMobileMenu}
              >
                <span>
                  {NavigationEnum.NAV.HOME}
                </span>
              </Link>
            </div>

            <ul className="ul_social-media_mobile">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                >
                  <img
                    className="icon_social-media_mobile"
                    src={facebookPicture}
                    alt="facebook"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
};

Navigation.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  hamClicked: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  scrolled: state.scrolled,
  hamClicked: state.hamClicked,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateScrolled: bindActionCreators(
      scrolledActions.updateScrolled,
      dispatch
    ),
    updateHamClicked: bindActionCreators(
      hamClickedActions.updateHamClicked,
      dispatch
    ),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
