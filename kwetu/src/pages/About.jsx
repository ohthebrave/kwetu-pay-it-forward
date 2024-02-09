import React from 'react';
import NavBar from '../components/NavBar';
import './about.css';

function About() {
  return (
    <>
    <div className='about-us'>
      <NavBar/>
      <div className='about-content'>
        <h2 className='word fst-italic'>About Us</h2>
      </div>
    </div>
    <div>
      <p></p>
    </div>
    </>
  )
}

export default About;