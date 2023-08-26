import {React, useEffect} from 'react'
import './Homestyle.css'
import logo from './assets/images/newprofpic1.jpg'
import {FaReact} from "react-icons/fa"
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from "react-icons/fa"
import {FaJs} from "react-icons/fa"
import {RiBootstrapFill} from "react-icons/ri"
import ShuffleText from 'react-shuffle-text';
import Typewriter from 'typewriter-effect';
import CV from './CV/CV.pdf'
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 800})
  },[])
  const onDownload = () => console.log('Download')

 
  return (
    <section id="home-container" className="home-container" >
      <div className="home-container1">
        <div className="home-container2" data-aos="fade-in">
          <img src={logo}  alt="formalpic"/>
        </div>
        <h4 className="font-link-oswald iam">Hi! I am </h4>
        <h2 className="font-link-bebas text-colored-white animate__animated animate__slideInLeft"><ShuffleText content = "Jean Lorenz R. Recato"/></h2>
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
          <a href="https://react.dev" target="_blank" rel="noreferrer"><FaReact /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><AiFillHtml5 /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"><FaCss3Alt /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><FaJs /></a>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"><RiBootstrapFill /></a>
        </div>
       <a className="cv-link" href={CV} download="Resume.pdf">
        <button className="cv-download">Download CV</button>
       </a>
       </div>
      
              

    </section>
  
  )
}

export default Home