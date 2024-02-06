import React from 'react';
import '../App.css';
import img from '../assets/people.jpeg'


function OurStaff() {
  return (
    <div className='staff'>
      <img src={img} alt="people" />
    </div>
  )
}

export default OurStaff;