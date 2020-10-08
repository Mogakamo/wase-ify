import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom"
import { route } from '../backend/routes/user';

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import PostanAd from "./components/post-ad."

function App() {
  return (
    <Router>
    <Navbar />
    <Route path="/home" exact component={Home} />
    <Route path="/postad" exact component={PostanAd} />
    <Route path="/register" exact component={register} />
    <Route path="/login" exact component={login} />
    <Route path="/profile" exact component={profile} />
    </Router>
  );
}

export default App;
