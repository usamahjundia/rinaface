import React from 'react';
// import logo from './logo.svg';
// import {Route,Switch,NavLink} from "react-router-dom"
import './App.css';
import Board from "./Board"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"

// never use a for links, use link component
// use function instead of the class when you need prop
// for a route
// when using function, use render if you dont want
// to re instantiate comp
function App() {
  return (
    <div className="App">
        <Board/>
    </div>
  );
}

export default App;
