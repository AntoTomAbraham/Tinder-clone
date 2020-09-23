import React  from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./Chatr.css";
import {Link} from "react-router-dom";
function Chatr({name,message,timestamp,profilepicture}) {
    return (
        <Link to={"/chat/${name}"}>
        <div className="chat">
            <Avatar className="chat_image" alt={name} src={profilepicture} />
            <div className="chat_details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat_timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chatr
