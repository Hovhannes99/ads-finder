import React from 'react'
import Nav from "./components/Nav";
import './App.sass';
// import Body from './components/Body';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Pricing from "./components/Pricing";


function App() {
  return (
      <>
      <header className="header">
        <Nav/>
      </header>
      </>
  );
}

export default App;
