import React, {useEffect} from 'react'
import './Projectstyles.css'
import Nassi from './assets/images/Nassi.png'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from "react-icons/fa"
import {DiJavascript} from "react-icons/di"
import {AiFillGithub} from "react-icons/ai"
import {MdOpenInNew} from "react-icons/md"
import { Tilt } from 'react-tilt'
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Projects = () => {
  
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <section id="project-container" className="project-container">
      <div className="wrapper">
        <div className="project-header" data-aos="fade-up" >
          <h4 className="header-portfolio">PORTFOLIO</h4>
          <h3>A compilation of projects I've developed</h3>
          <Tilt options={defaultOptions}><div className="imageholder">
            <img src={Nassi} alt="Project1" />
          </div>
          </Tilt>
        </div>
        
        
        <div className="project-desc" data-aos="fade-down">
          <h3 className="project-title font-link-montserrat">NassiPy</h3>
          <p className='font-link-lato'>Developed a Web application that helps newbies that wants to learn programing by introducing them to Python (one of the most basic programming language) and Nassi-Shneiderman Diagram for simple and top to down approach. With compact tutorials about indentations, syntax, and flow controls.</p>

          <ul className="tech-used">
            <li className="project-tech">
              <p className='font-link-lato'>
              HTML <AiFillHtml5 />
              </p>
            </li>

            <li className="project-tech">
              <p className='font-link-lato'> 
              CSS <FaCss3Alt />
              </p>
            </li>

            <li className="project-tech">
              <p className='font-link-lato'>
              Javascript <DiJavascript />
              </p>
            </li>
          </ul>

          <div className="checkIt">
            <div className="check">
            <a href="https://github.com/LullabyOfLies/NassiPy-Development-of-Nassi-Shneiderman-DIagram-to-Python-Converter" rel="noreferrer" target="_blank">
              <h4>Check Code <AiFillGithub /></h4>
              </a>
            </div>
            <div className="check">
              <a href="https://nassipy.netlify.app/" target='_blank' rel="noreferrer">
              <h4>Live Demo <MdOpenInNew /></h4>
              </a>
            </div>
          </div>
        </div>
       
      </div> 
    </section>
  )
}

export default Projects