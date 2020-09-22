import React from 'react';
import "./Chat.css";
import Chatr from "./Chatr.js";
function Chat() {
    return (
        <div className="chats">
            <Chatr 
            name="sassy"
            message="hello! how are you"
            timestamp="35 minutes ago"
            profilepicture="https://tse4.mm.bing.net/th?id=OIP.h31NRlRBFxnXimvFS0fTywHaNK&pid=Api&P=0&w=300&h=300"
            />
            <Chatr 
            name="boobo"
            message="hello! how are you"
            timestamp="35 minutes ago"
            profilepicture="https://tse3.mm.bing.net/th?id=OIP.5eHul--2DIXXuO5aAHGD3wHaE8&pid=Api&P=0&w=234&h=157"
            />
            <Chatr 
            name="queen"
            message="hello! how are you"
            timestamp="35 minutes ago"
            profilepicture="https://tse3.mm.bing.net/th?id=OIP.JbqiAfgqzmRTzRK3j3S80wHaFj&pid=Api&P=0&w=209&h=157"
            />
            <Chatr 
            name="baby"
            message="hello! how are you"
            timestamp="35 minutes ago"
            profilepicture="https://tse1.mm.bing.net/th?id=OIP.E2AeDt7C00TO2VvT8MeVpAHaEK&pid=Api&P=0&w=310&h=175"
            />
        </div>
    )
}

export default Chat
