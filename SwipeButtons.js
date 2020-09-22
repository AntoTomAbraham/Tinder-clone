import React from 'react';
import "./SwipeButtons.css";
import ReplyIcon from "@material-ui/icons/Reply";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipe_repeat">
                <ReplyIcon fontsize="large"/>
                </IconButton>
            <IconButton className="swipe_left">
                <CloseIcon fontsize="large"/>
                </IconButton>
            <IconButton className="swipe_star">
                <StarRateIcon fontsize="large"/>
                </IconButton>
            <IconButton className="swipe_right">
                <FavouriteIcon fontsize="large"/>
                </IconButton>            
            <IconButton className="swipe_lightning">
                <FlashOnIcon fontsize="large"/>
                </IconButton>
            

        </div>
    )
}

export default SwipeButtons
