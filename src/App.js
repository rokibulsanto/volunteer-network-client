import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Event from './Components/Event/Event';

 export const userContext = createContext();
 export const activityContext = createContext();
 export const infoContext = createContext();

function App() {
  const [loogedInUser, setLoggedInUser] = useState({});
  const [eventId, setEventId] = useState('');
  const [eventInfo, setEventInfo] = useState({});
  return (
    <userContext.Provider value={[loogedInUser, setLoggedInUser]}>
    <activityContext.Provider value ={[eventId, setEventId]}>
    <infoContext.Provider value={[eventInfo, setEventInfo]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/event">
          <Event></Event>
        </Route>
        <PrivateRoute path="/registration">
          <Registration></Registration>
        </PrivateRoute>
      </Switch>
    </Router>
    </infoContext.Provider>
    </activityContext.Provider>
    </userContext.Provider>
  );
}

export default App;
