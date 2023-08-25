import React, {useEffect} from 'react'
import './Aboutstyle.css'
import About1 from './assets/images/aboutme.jpg'
import ShuffleText from 'react-shuffle-text';
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=>{
    Aos.init({duration: 3000})
  },[])
  return (
    <section id="aboutContainer"  className="aboutContainer">

      <div className="imageContainer" data-aos="zoom-in">
        <img  src={About1} alt="about1" />
      </div>
      
      <div className="aboutTxtContainer" data-aos="flip-right">
        <h2>About Me</h2>
        <h3>A committed Front-end Developer based in Manila, Philppines</h3>
        <p>I am a front-end developer specializing in HTML, CSS, React and JavaScript, transforming designs into visually appealing and interactive interfaces. With a keen eye for detail and a passion for user experience, I collaborate with designers and back-end developers to deliver high-quality, responsive web solutions. My goal is to create seamless and captivating user experiences that leave a lasting impression.</p>
      </div>
     
    </section>
  )
}

export default About