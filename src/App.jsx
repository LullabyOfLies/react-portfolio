import React from "react";
import NavigationBar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Project1 from "./Project1.jsx";
import Contacts from "./Contact.jsx"
 

function App() {
  return (
    <div className="App">
    <NavigationBar />
    <Home />
    <About />
    <Project />
    <Project1 />
    <Contacts />
  
  </div>
  );
}

export default App;
