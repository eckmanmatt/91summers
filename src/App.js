import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react'

import {BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

// Components
import Home from "./components/home.component.js";
import CreatePastry from "./components/create.component.js";
import EditPastry from "./components/edit.component.js";
import PastryList from "./components/pastry.component.js";
import DessertList from "./components/dessert.component.js";
import BreadList from "./components/bread.component.js";
import ChocolateList from "./components/chocolate.component.js";


function App() {

  const [pastries, setPastries] = useState([])

  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">91 Summers MERN-Stack</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/pastries" className="nav-link">Pastries</Link>
              </li>
              <li className="navbar-item">
                <Link to="/desserts" className="nav-link">Desserts</Link>
              </li>
              <li className="navbar-item">
                <Link to="/breads" className="nav-link">Breads</Link>
              </li>
              <li className="navbar-item">
                <Link to="/chocolates" className="nav-link">Chocolates</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Add New</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Routes>
          <Route path="/" element = {<Home/>} exact/>
          <Route path="/pastries" element = {<PastryList/>}/>
          <Route path="/desserts" element = {<DessertList/>}/>
          <Route path="/breads" element = {<BreadList/>}/>
          <Route path="/chocolates" element = {<ChocolateList/>}/>
          <Route path="/create" element = {<CreatePastry/>}/>
          <Route path="/edit/:id" element = {<EditPastry/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
