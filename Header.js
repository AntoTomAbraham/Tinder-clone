import React from 'react';
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link,useHistory } from "react-router-dom";
import "./Header.css"
function Header({ backButton }) {
    const history= useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=>history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header_logo"/>
                </IconButton>
            ):(
                <IconButton>
                <PersonIcon className="header_logo" fontSize="large"/>
                </IconButton>
            )}
            <Link to="/">
            <img className="tinder_logo" src="https://p.kindpng.com/picc/s/19-195266_tinder-icon-2017-logo-vector-gradient-tinder-logo.png" 
            alt=""/>
            </Link>
            <Link to="/chat">
            <IconButton>
            <ForumIcon className="header_logo" fontSize="large"/>
            </IconButton>     
            </Link>            
        </div>
    )
}

export default Header;
