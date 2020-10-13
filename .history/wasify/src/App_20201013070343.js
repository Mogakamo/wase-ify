import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom"
import { route } from '../backend/routes/user';

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import PostanAd from "./components/post-ad.component";
import register from "./components/register.component";
import login from "./components/login.component";
import profile from "./components/profile.component";

function App() {
  return (
  <div className="App"></div>
    );
}

export default App;
