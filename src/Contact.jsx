import React from 'react'
import './Contactstyle.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {FaReact} from "react-icons/fa"
const Contact = () => {
  return (
    <section id="contact-me" className="contact-me">
      <div className="contact-header">
      <h4 className="contact-title">CONTACT</h4>
      <h3 className="contact-title-desc">Reach out 🤝 to me on: </h3>
      </div>
      <div className="contact-container">
        <div className="home-icons">
         <a href="https://github.com/LullabyOfLies" target="_blank" rel="noreferrer" className="icon-link">
            <button className="github-btn">Github <AiFillGithub /></button>
            
          </a>

          <a href="https://www.linkedin.com/in/jean-lorenz-recato-31a6b6249/" target="_blank" rel="noreferrer" className="icon-link">
            <button>LinkedIn <AiFillLinkedin /></button>
          </a>

          <a href="https://www.facebook.com/DjinnLorenz/" target="_blank" rel="noreferrer" className="icon-link">
          <button> Facebook <FaFacebookF /> </button>
          </a>

          <a href="mailto:jeanrecato25@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <button> Gmail <SiGmail /></button>
          </a>

        </div>

      </div>
     <footer>
     <p>©️ Made with { <FaReact /> } by Jean. Circa 2023</p>
     </footer>
    </section>
  )
}

export default Contact