import React, { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Activity from '../Activity/Activity';
import Data from '../FakeData/FakeData';
import Appbar from './Appbar/Appbar';
import './Home.css';

const Home = () => {
    const [item, setItem] = useState(Data);

    // useEffect(() => {
    //     fetch(Data)
    //     .then(res => res.json())
    //     .then(data => setItem(data));
    // },[])
    return (
        <div>
            <Appbar></Appbar>
            <h2 className="heading">I GROW BY HELPING PEOPLE IN NEED.</h2>
            <Form inline>
             <FormControl type="text" placeholder="Search" className="searchForm"/>
            </Form>
            <button className="btn btn-primary btnStyle">Search</button>
            <div className="row">
                {
                    item.map(data => <Activity data={data}></Activity>)
                }
            </div>
        </div>
    );
};

export default Home;