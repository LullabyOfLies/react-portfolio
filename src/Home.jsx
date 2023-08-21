import React from 'react'
import './Homestyle.css'
import logo from './assets/images/newprofpic1.jpg'
import {FaReact} from "react-icons/fa"
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from "react-icons/fa"
import {FaJs} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import ShuffleText from 'react-shuffle-text';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id="home-container" className="home-container" >
      <div className="home-container1">
        <div className="home-container2">
          <img src={logo}  alt="formalpic"/>
        </div>
        <h4 className="font-link-oswald">Hi! I am </h4>
        <h1 className="font-link-bebas text-colored-white animate__animated animate__slideInLeft"><ShuffleText content = "Jean Lorenz R. Recato"/></h1>
        <h3 className="font-link-oswald"> 
          <span className='typewriter-fx'> 
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [">Front-End Developer", ">Software Engineer", ">UI/UX Designer"],
              }}
            />
          </span>     
          </h3>
        
        <div className="techStack animate__animated animate__slideInRight animate_delay">
          <p> Tech stack |</p>
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