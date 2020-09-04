import React from "react";
import { Link, useHistory } from "react-router-dom";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./header.css";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__ios" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontsize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https:/1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
