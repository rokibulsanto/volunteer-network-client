import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { infoContext } from '../../App';
import Data from '../FakeData/FakeData';
import './Activity.css';

const Activity = ({data}) => {
    const {title,image,id} = data;
    const history = useHistory();
    const [eventInfo, setEventInfo] = useContext(infoContext);
   

    const handleEvent = () => {
        setEventInfo(data);
        history.replace('/registration');
    }
    return (
        <div className="col-md-3" onClick={handleEvent}>
            <img className="img" src={image} alt=""/>
            <h3 className="activityHeading">{title}</h3>
        </div>
    );
};

export default Activity;