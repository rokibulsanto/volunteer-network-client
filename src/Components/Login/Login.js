import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';
import './Login.css';
import logo from '../../logos/Group 1329.png';
import googleLogo from '../../logos/google.png';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
const [loogedInUser, setLoogedInUser]= useContext(userContext);
const history = useHistory();
const location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignedIn:false,
        name:'',
        email:'',
        photo:''
    })


    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email, photoURL} = res.user;
            const signInUser = {
                isSignedIn: true,
                email:email,
                name:displayName,
                photo:photoURL
            }
            setUser(signInUser);
            setLoogedInUser(signInUser);
            storeAuthToken();
            history.replace(from);

        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }
   
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
           sessionStorage.setItem('token', idToken);
        
          })
          .catch(function(error) {
            
          });
    }

    return (
        <div>
            <div className="logoArea"> <img className="loginLogo" src={logo} alt=""/> </div>
            <div className="login">
                <h4>Log in With</h4>
                <img className="google" src={googleLogo} alt=""/>
                <Button onClick={handleGoogleSignIn} variant="danger">Continue With Google</Button><br/>
                <small>Don't have an account? </small>
                <small>Create an account </small>
                    { user.isSignedIn && <p>Hello, {user.name}</p>}
            </div>
        </div>
    );
};

export default Login;