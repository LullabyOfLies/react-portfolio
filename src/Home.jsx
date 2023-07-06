import React from 'react'
import './Homestyle.css'
import logo from './assets/images/newprofpic.jpg'
import {FaReact} from "react-icons/fa"
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from "react-icons/fa"
import {FaJs} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import ShuffleText from 'react-shuffle-text';


const Home = () => {
  return (
    <section id="home-container" className="home-container">
      <div className="home-container1">
        <div className="home-container2">
          <img src={logo}  alt="formalpic"/>
        </div>
        
        <h1 className="font-link-oswald"><ShuffleText content = "Front-End Developer"/></h1>
        <p><ShuffleText content = "Hi! I'm Jean and I'm a Front-End Developer"/></p>
       
        <div className="techStack">
          <p><ShuffleText content ="Tech stack |"/></p>
          <a href="#" target="_blank" rel="noreferrer"><FaReact /></a>
          <a href="#" target="_blank" rel="noreferrer"><AiFillHtml5 /></a>
          <a href="#" target="_blank" rel="noreferrer"><FaCss3Alt /></a>
          <a href="#" target="_blank" rel="noreferrer"><FaJs /></a>
          <a href="#" target="_blank" rel="noreferrer"><SiTailwindcss /></a>
        </div>
       </div>
    
  

    </section>
  
  )
}

export default Home