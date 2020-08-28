import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import FlashOnRoundedIcon from "@material-ui/icons/FlashOnRounded";
import "../styles/FooterButton.css";

const FooterButtons = () => {
  return (
    <div className="footerButtons">
      <IconButton className="__replay">
        <ReplayRoundedIcon fontSize="large" />
      </IconButton>
      <IconButton className="__close">
        <CloseRoundedIcon fontSize="large" />
      </IconButton>
      <IconButton className="__star">
        <StarRoundedIcon fontSize="large" />
      </IconButton>
      <IconButton className="__favorite">
        <FavoriteSharpIcon fontSize="large" />
      </IconButton>
      <IconButton className="__flash">
        <FlashOnRoundedIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default FooterButtons;
