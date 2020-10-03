import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {title,image} = props.data;
    return (
        <div className="col-md-3">
            <img className="img" src={image} alt=""/>
            <h3 className="activityHeading">{title}</h3>
        </div>
    );
};

export default Activity;