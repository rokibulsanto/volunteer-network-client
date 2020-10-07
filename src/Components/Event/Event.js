import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Appbar from '../Home/Appbar/Appbar';
import './Event.css';


const Event = () => {
    const [events, setEvents] = useState([]);

    
    const [loogedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch('https://aqueous-journey-04411.herokuapp.com/event?email='+loogedInUser.email, {
            method:'GET',
            headers:{ 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setEvents(data));
    },[])
    
  const clear = (id) => {
    const v = events.filter(i => i._id !== id)
    setEvents(v);
  }
    const deleteEvent = (id) => {
         
        fetch(`https://aqueous-journey-04411.herokuapp.com/delete/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
           
            
        })
        clear(id);
    }

    return (
        <div>
           <Appbar></Appbar>
           <div className="row eventMain">
            {
                events.map(item => <div className="col-md-6"> 
                    <div className="eventImage"> 
                        <img style={{width:'200px'}} src={item.image} alt=""/>
                        <h3 className="eventTitle">{item.title}</h3>
                        <button onClick={()=>deleteEvent(item._id)} className="btn btn-warning cancelBtn">Cancel</button>
                    </div>
                    
                </div>)
            }
            </div>
        </div>
    );
};

export default Event;