import React from 'react';
import { FOUNDERS } from './Founders';


function About() {
  return (
    <div>
        <h2 className='text-center text-secondary'>Founders</h2>
        <div className="container mt-5">
        {FOUNDERS?.map(person => (    
            <div className=' mt-4 polaroid' key={person.id}>
                <div className="title">
                    <p className='fw-light fs-4'>{person.name}</p>
                </div>
                <img
                  className='img-fluid mb-3 product-image'
                  key={person.id}
                  src={person.Image} 
                  alt="original"/>
                <div className="p-4">
                    <p>{person.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default About;