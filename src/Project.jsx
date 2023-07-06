import React from 'react'
import './Projectstyles.css'
import Nassi from './assets/images/Nassi.png'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from "react-icons/fa"
import {DiJavascript} from "react-icons/di"
import {AiFillGithub} from "react-icons/ai"
import {MdOpenInNew} from "react-icons/md"
import ShuffleText from 'react-shuffle-text';

const Projects = () => {
  return (
    <section id="project-container" className="project-container">
      <div className="wrapper">
        <div className="project-header">
          <h4 className="header-portfolio">PORTFOLIO</h4>
          <h3>A compilation of projects I've developed</h3>
          <div className="imageholder">
            <img src={Nassi} alt="Project1" />
          </div>
        </div>
        
        
        <div className="project-desc">
          <h4 className="project-title">Project 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor aliquid aperiam at fuga rem. Fuga iste impedit quae hic est ipsa a, voluptatibus voluptate nisi porro ratione laboriosam quam.</p>

          <ul className="tech-used">
            <li className="project-tech">
              <p>
              HTML <AiFillHtml5 />
              </p>
            </li>

            <li className="project-tech">
              <p> 
              CSS <FaCss3Alt />
              </p>
            </li>

            <li className="project-tech">
              <p>
              Javascript <DiJavascript />
              </p>
            </li>
          </ul>

          <div className="checkIt">
            <div className="check">
            <a href="#" rel="noreferrer">
              <h4>Check Code <AiFillGithub /></h4>
              </a>
            </div>
            <div className="check">
              <a href="#" rel="noreferrer">
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