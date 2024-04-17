import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div>
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa fugiat asperiores impedit porro totam officiis id sed cupiditate? Ipsum sequi voluptatum id iste vel et aspernatur, hic quae? Odio.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia consequatur ducimus voluptatem, est quaerat! Distinctio earum modi soluta veritatis cupiditate eligendi. Sit itaque unde exercitationem dolores, dignissimos alias aliquid.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nemo.</p>
      </div>
    </div>
    </div>
  )
}

export default Biography
