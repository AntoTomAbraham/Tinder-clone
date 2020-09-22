import React ,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import "./Tindercards.css";
import database from "./Firebase.js";
import { Unsubscribe } from '@material-ui/icons';
function Tindercards() {
    const [people, setPeople] = useState([]);
    useEffect(()=>{
        const unsubscribe=database
        .collection("people")
        .onSnapshot((snapshot)=> 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        )
        return () => {
            unsubscribe();
        }
    },[])
    return (
        <div>
            <h1>Tinder card</h1>
            <div className="cardcontainer">
            {people.map((person) =>(
                <TinderCard 
                className='swipe'
                key={person.name}
                preventSwipe={["up","down"]}
                >
                    <div
                    style={{ backgroundImage: "url(${person.url})" }}
                     className="card"
                     >
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
        );
    }

export default Tindercards;
