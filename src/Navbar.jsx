import React from 'react';
import { useState } from 'react';
import './Navbarstyle.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // Using useState setting the `clicked` constant to false, remember that from right to left : useState will set the default value/instant/boolean then pass it to `setClick` variable and `setClick` variable will pass the value to the `clicked` variable  
  const [clicked, setClicked] = useState(false);

  // 3. When handleClick function is triggered it will manipulate or pass its value to the `clicked` variable
  const handleClick = () => {
    // 4. Now, here the `clicked` is set to `true` then the setClick will revert the `clicked` variable to its default state of `false`. This will serve as a toggle.
    setClicked(!clicked);
  }



  return (
    <nav className="nav">
      <h1 className="font-link-montserrat">
        <a href="/" className="site-title">
          JL.Dev
        </a>
      </h1>
      {/* 5. Lastly, the div below with the className of `nav-menu` will check if (?) the button is `clicked`, if it is the `show-menu` CSS will trigger along with the `nav-menu` CSS, else (:) the `donotshow-menu` CSS will trigger along with the `nav-menu` , REFER TO THE Navbar.css for the styling triggers.*/}
      <div className={`nav-menu ${clicked ? 'show-menu' : 'donotshow-menu'}`}>
        <ul>
          <li className="active">
            <a href="#home-container">Home</a>
          </li>
          <li className="about">
            <a href="#aboutContainer">About</a>
          </li>
          <li className="projects">
            <a href="#project-container">Projects</a>
          </li>
          <li className="contact">
            <a href="#contact-me">Contact</a>
          </li>
          <li>
            {/*Button*/}
            
          </li>
        </ul>
      </div>
      {/* 1. The div with className of `nav-icon when clicked will trigger the handleClick Function */}
      <div className="nav-icon">
        <i id="bar" onClick={handleClick}>
          {/* 2. if the onClick function is triggred it will set the `clicked` variable to `true` */}
          {clicked ? <FaTimes /> : <GiHamburgerMenu />}
        </i>
      </div>
    </nav>
  );
}

export default Navbar;
