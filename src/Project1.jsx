import React,{useEffect} from 'react'
import './Projectstyles.css'
import Project2 from './assets/images/pomodoro-app.png'
import {FaReact} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {MdOpenInNew} from "react-icons/md"
import { Tilt } from 'react-tilt'
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Projects1 = () => {

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
    Aos.init({duration: 700})
  },[])

  return (
    <section className="project-container">
      <div className="wrapper">

        <div className="project-desc" data-aos="fade-up-right">
          <h3 className="project-title font-link-montserrat" >Pomodoro App</h3>
          <p className='font-link-lato'>ReactJS and Vanilla CSS were used to create a Pomodoro Timer web application that allows users to efficiently arrange chores using the Pomodoro technique. The app provides a straightforward user interface made with Vanilla CSS for a quick and easy experience.</p>

          <div className="tech-used">
            <div className="project-tech">
              REACT <FaReact />
            </div>

            <div className="project-tech">
              CSS <FaCss3Alt />
            </div>
          </div>

          <div className="checkIt">
            <div className="check">
            <a href="https://github.com/LullabyOfLies/Pomodoro-App" target='_blank' rel="noreferrer">
              <h4>Check Code <AiFillGithub /></h4>
              </a>
            </div>
            <div className="check">
              <a href="https://beta-pomodoro-app.netlify.app" target='_blank' rel="noreferrer">
              <h4>Live Demo <MdOpenInNew /></h4>
              </a>
            </div>
          </div>
        </div>

        <div className="project-header" data-aos="fade-down-left">
        <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}><div className="imageholder">
            <img src={Project2} alt="Project2" />
        </div>
        </Tilt>
        </div>
       
      </div>

      
      
    </section>
  )
}

export default Projects1