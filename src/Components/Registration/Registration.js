import React, { useContext, useEffect } from 'react';
import './Registration.css';
import logo from '../../logos/Group 1329.png';
import { activityContext, infoContext, userContext } from '../../App';

const Registration = () => {
    const [loogedInUser, setLoogedInUser] = useContext(userContext);
    const [eventId, setEventId] = useContext(activityContext);
    const [eventInfo, setEventInfo] = useContext(infoContext);
    console.log(eventInfo.title);

    // useEffect(() => {
    //     fetch('http://localhost:5000/event/'+eventId)
    //     .then(res => res.json())
    //     .then(data => setEventInfo(data));
    // },[])
    return (
        <div>
            <div className="logoArea"> <img className="loginLogo" src={logo} alt=""/> </div>
            <div className="regContainer">
                <h4>Register as a Vounteer</h4>
                <form action="">
                    <input type="text" defaultValue={loogedInUser.name} placeholder="Full Name"/>
                    <input type="email" defaultValue={loogedInUser.email} name="" id="" placeholder="Username Or Email"/>
                    <input type="date" name="" id=""/>
                    <input type="text"  placeholder="Description" required/>
                    <input type="text" placeholder="" Value={eventInfo.title}/>
                    <input id="submit" type="submit" value="Registration"/>
                </form>
            </div>
        </div>
    );
};

export default Registration;