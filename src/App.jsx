import { useState } from 'react'
import './App.css'
import React from 'react'
import Coverphoto from './coverphoto'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDocumentArrowDown } from 'react-icons/hi2'; // For resume

function App() {

  return (
    <div>
      <Parallax pages={4} >
          <ParallaxLayer speed={1}> 
              <Coverphoto />
              <div class="grid">
              <div className="aboutMe">
              <h1 className="right-text">Shiven Gupta</h1>
              <h2 className="right-text">Optimist • Curious • Creator</h2>
              <p className="right-text">Computer Science + Math @ MIT | Full stack web Developer | ROS & AI Enthusiast</p>

              </div>
              <div >
                  <div className="center">
                    <h1>Links</h1>
                  </div>
                  <div className="myLinks">
                  <a href="https://github.com/Sh1ven11" className="logo-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="logo" size={30} /></a>

                  <a href="/resume.pdf" className="logo-link" download>
                    <HiDocumentArrowDown className="logo" size={30} /></a>

                  <a href="https://www.linkedin.com/in/shiven-gupta-96b2812a7/"  className="logo-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="logo" size={30} /></a>
                </div>
                </div>
              </div>
              <div >
                <h1 className="center">Projects</h1>
                <ul >
                  <li className="center"><a href="https://sh1ven11.github.io/Formula-Manipal/">Formula Manipal</a></li>
                </ul>
              </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={.5}>
                <h1>Optimist</h1>

            </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
