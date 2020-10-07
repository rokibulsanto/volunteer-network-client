import React, { useContext, useEffect } from 'react';
import './Registration.css';
import logo from '../../logos/Group 1329.png';
import { activityContext, infoContext, userContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Registration = () => {
    const [loogedInUser, setLoogedInUser] = useContext(userContext);
    const [eventId, setEventId] = useContext(activityContext);
    const [eventInfo, setEventInfo] = useContext(infoContext);
    const { register, handleSubmit} = useForm();
    const history = useHistory();

    const handleSubmi = (e) => {
        const eventDetails = {...loogedInUser, ...eventInfo};
        fetch('https://aqueous-journey-04411.herokuapp.com/addEvent', {
            method:'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
              },
              body:JSON.stringify(eventDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        history.push('/event');
        e.preventDefault();
    }

    return (
        <div>
            <div className="logoArea"> <img className="loginLogo" src={logo} alt=""/> </div>
            <div className="regContainer">
                <h4>Register as a Vounteer</h4>
                <form onSubmit={handleSubmi}>
                    <input type="text" defaultValue={loogedInUser.name} placeholder="Full Name"  ref={register({ required: true })}/>
                    <input type="email" defaultValue={loogedInUser.email} placeholder="Username Or Email"  ref={register({ required: true })}/>
                    <input type="date"  ref={register({ required: true })}/>
                    <input type="text"  placeholder="Description" required  ref={register({ required: true })}/>
                    <input type="text" placeholder="" Value={eventInfo.title}  ref={register({ required: true })}/>
                    <img style={{width:'20px',display:'none'}} src={eventInfo.image} alt=""  ref={register({ required: true })}/>
                   <input id="submit" type="submit" value="Registration"/> 
                </form>
            </div>
        </div>
    );
};

export default Registration;