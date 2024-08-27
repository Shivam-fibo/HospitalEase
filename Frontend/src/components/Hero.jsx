import React from 'react'

const Hero = ({title , info}) => {
  return (
    <div>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
           <p>{info} </p>
        </div>
       
      </div>
    </div>
  )
}

export default Hero
