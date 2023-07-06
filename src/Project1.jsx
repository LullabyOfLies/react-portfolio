import React from 'react'
import './Projectstyles.css'
import Project2 from './assets/images/sample2.jpg'
import {FaReact} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {MdOpenInNew} from "react-icons/md"

const Projects1 = () => {
  return (
    <section className="project-container">
      <div className="wrapper">

        <div className="project-desc">
          <h4 className="project-title">Project 2</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor aliquid aperiam at fuga rem. Fuga iste impedit quae hic est ipsa a, voluptatibus voluptate nisi porro ratione laboriosam quam.</p>

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

        <div className="project-header">
          <div className="imageholder">
            <img src={Project2} alt="Project2" />
        </div>
        </div>
       
      </div>

      
      
    </section>
  )
}

export default Projects1