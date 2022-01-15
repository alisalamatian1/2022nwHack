import './App.css';
import ProblemBank from './Routes/ProblemBank';
import Post from './Routes/Post';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path= "/" element = {<ProblemBank />} />
        <Route exact path= "/Post" element = {<Post />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
