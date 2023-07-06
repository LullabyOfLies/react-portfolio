import React from 'react'
import './Aboutstyle.css'
import About1 from './assets/images/about1.jpg'
import ShuffleText from 'react-shuffle-text';

const About = () => {
  return (
    <section id="aboutContainer"  className="aboutContainer">

      <div className="aboutTxtContainer">
        <h2><ShuffleText content= "About me"/></h2>
        <h3>A committed Front-end Developer based in Manila, Philppines</h3>
        <p>I am a front-end developer specializing in HTML, CSS, React and JavaScript, transforming designs into visually appealing and interactive interfaces. With a keen eye for detail and a passion for user experience, I collaborate with designers and back-end developers to deliver high-quality, responsive web solutions. My goal is to create seamless and captivating user experiences that leave a lasting impression.</p>
      </div>

      <div className="imageContainer">
        <img src={About1} alt="about1" />
      </div>
      
     
    </section>
  )
}

export default About