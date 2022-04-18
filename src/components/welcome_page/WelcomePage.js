import React, { Fragment } from "react";

import './WelcomePage.css';
import { WelcomePageEnum } from "./enums/WelcomePageEnum";


const WelcomePage = ({ id }) => (
    <Fragment>
      <div className="welcome-page_container" id={id}>
        <p>{WelcomePageEnum.WELCOME.TITLE}</p>
      </div>
    </Fragment>
);

export default WelcomePage;
