import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
           <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quasi omnis sed soluta, reiciendis excepturi laudantium iusto amet dicta optio ullam sit possimus mollitia non vel laboriosam consectetur nulla. Molestiae.
           </p>
        </div>
        <div className="banner">
          <img src = {imageUrl} alt="hero_image" className='animated-image' />
        </div>
      </div>
    </div>
  )
}

export default Hero
