import React, { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Activity from '../Activity/Activity';
import Appbar from './Appbar/Appbar';
import './Home.css';

var event = [

    {
        id:1,
        title:'animal-Shelter',
        image:"https://i.ibb.co/ZhtkS6F/animal-Shelter.png"
    },
    {
        id:2,
        title:'Baby-Sit',
        image:"https://i.ibb.co/jzFwMZH/babySit.png"
    },
    {
        id:3,
        title:'bird-house',
        image:"https://i.ibb.co/1Zs1vXd/bird-House.png"
    },
    {
        id:4,
        title:'child-support',
        image:"https://i.ibb.co/9bvtQBy/child-Support.png"
    },
    {
        id:5,
        title:'clean-water',
        image:"https://i.ibb.co/XLc8BB2/clean-Water.png"
    },
    {
        id:6,
        title:'clean park',
        image:"https://i.ibb.co/PCDS4cX/clearn-Park.png"
    },
    {
        id:7,
        title:'cloth-swap',
        image:"https://i.ibb.co/GFZKfMX/cloth-Swap.png"
    },
    {
        id:8,
        title:'drive-safely',
        image:"https://i.ibb.co/xJhytQ1/drive-Safety.png"
    },
    {
        id:9,
        title:'extra-volunteer',
        image:"https://i.ibb.co/1zLKwdx/vote-Register.png"
    },
    {
        id:10,
        title:'food-charity',
        image:"https://i.ibb.co/ZMFX4nC/food-Charity.png"
    },
    {
        id:11,
        title:'good-education',
        image:"https://i.ibb.co/Wkhy3Bd/good-Education.png"
    },
    {
        id:12,
        title:'IT-help',
        image:"https://i.ibb.co/SdMfHcV/ITHelp.png"
    },
    {
        id:13,
        title:'library-books',
        image:"https://i.ibb.co/rF22ztx/library-Books.png"
    },
    {
        id:14,
        title:'music-lessons',
        image:"https://i.ibb.co/2vQ4vKW/music-Lessons.png"
    },
    {
        id:15,
        title:'new-books',
        image:"https://i.ibb.co/SX3TzNh/newBooks.png"
    },
    {
        id:16,
        title:'refuse-shelter',
        image:"https://i.ibb.co/MZ9djkH/refuse-Shelter.png"
    },
    {
        id:17,
        title:'river-clean',
        image:"https://i.ibb.co/wdBBvSM/river-Clean.png"
    },
    {
        id:18,
        title:'schools-suffiles',
        image:"https://i.ibb.co/GJxZHsQ/school-Suffiles.png"
    },
    {
        id:19,
        title:'study-group',
        image:"https://i.ibb.co/rfszYLv/study-Group.png"
    },
    {
        id:20,
        title:'stuffed-animals',
        image:"https://i.ibb.co/SVNbZMw/stuffed-Animals.png"
    }

];


const Home = () => {

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
                    event.map(data => <Activity data={data}></Activity>)
                }
            </div>
        </div>
    );
};

export default Home;