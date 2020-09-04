import React from "react";
import "./swipebutton.css";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButton = () => {
  return (
    <div className="swipeButton">
      <IconButton className="swipeButtons">
        <ReplayIcon fontSize="large" className="swipeButton__repeat" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipeButton__left" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" className="swipeButton__star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipeButton__right" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" className="swipeButton__lightning" />
      </IconButton>
    </div>
  );
};

export default SwipeButton;
