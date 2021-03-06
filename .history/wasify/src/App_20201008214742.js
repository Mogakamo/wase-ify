import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <Navbar />
    <Route path="/home" exact component={Home} />
    <Route path="/postad" exact component={PostanAd} />
    <Route path="/register" exact component={register} />
    </Router>
  );
}

export default App;
