import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import './ChatScreen.css';
function ChatScreen() {
    const [input, setinput] = useState('')
    const [messages, setMessages] = useState(
        [
            {
                name:"ellon",
                image:"https://tse1.mm.bing.net/th?id=OIP.06Ue_JYDr6Sd0HiZDO-MEwHaEo&pid=Api&P=0&w=264&h=166",
                message:"hey!",
            },
            {
                name:"ellon",
                image:"https://tse1.mm.bing.net/th?id=OIP.06Ue_JYDr6Sd0HiZDO-MEwHaEo&pid=Api&P=0&w=264&h=166",
                message:"how is it going!",
            }
            ,{
                message:"cool",
            }
]);
      const handleSend = (e) => {
            e.preventDefault();

           setMessages([...messages,{message:input}])
           setinput('');
                    }
            
    return (
        <div className="chatScreen">
            <h2>Chat Screen</h2>
            <p className="chatScreen_timestamp">YOU MATCHED WITH ELLON ON 10/12/2019</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                    <Avatar
                    className="chatScreen_image"
                    alt={message.name}
                    src={message.image} 
                    />
                    <p className="chatScreen_text">{message.message}</p>
                    </div>
                ):(
                    <div className="chatScreen_message">
                        <p className="chatScreen_textuser">{message.message}</p>
                    </div>
                )
            ))}
                <form className="chatScreen_input">
                    <input value={input}
                    onChange={(e) => setinput(e.target.value)}
                     className="chatScreen_inputfield" placeholder="Type a message" type="text"/>
                    <button onClick={handleSend} type="submit" className="input_button">Send</button>
                </form>
            </div>
    )
}

export default ChatScreen
